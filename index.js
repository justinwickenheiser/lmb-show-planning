const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const path = require('path');
const sha256 = require('./src/js/Sha256.js');
const { Client } = require('pg');

const client = new Client({
	user: 'lmbapp',
	host: 'localhost',
	database: 'lmbapp',
	password: 'lmb-password',
	port: 5432,
});

client.connect();

const SALT = 'Jlfi8h308y*^T31gflkUhd97f7&^*^R$khg#G[v}';

// configure passport.js to use the local strategy
passport.use(new LocalStrategy({ usernameField: 'username' },(username, password, done) => {
	// hash the password
	password = sha256.hash(password+SALT);

	var text = 'SELECT user_id, username, password FROM lmb_showplanning_user WHERE username = $1';
	var values = [username];
	client.query(text, values, (err,res) => {
		if (err) {
			console.log(err.stack);
		} else if (res.rows[0]) {
			const user = res.rows[0];
			if(username === user.username && password === user.password) {
				// Local strategy returned true
				return done(null, user)
			}
		}
	});
}));

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
	// console.log('Inside serializeUser callback. User id is save to the session file store here')
	return done(null, user.user_id);
});

passport.deserializeUser((id, done) => {
	// console.log('Inside deserializeUser callback')
	// console.log(`The user id passport saved in the session file store is: ${id}`)
	var text = 'SELECT user_id FROM lmb_showplanning_user WHERE user_id = $1';
	var values = [id];
	client.query(text, values, (err,res) => {
		if (err) {
			console.log(err.stack);
			return false;
		} else if (res.rows[0]) {
			const user = res.rows[0].user_id === id ? res.rows[0] : false; 
			return done(null, user);
		}
	});
});


// Initialize the app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
	genid: (req) => {
		// console.log('Inside session middleware genid function')
		// console.log(`Request object sessionID from client: ${req.sessionID}`)
		return uuid() // use UUIDs for session IDs
	},
	store: new FileStore(),
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');


// API CALLS
app.post('/library/post', function (req, res) {
	var form = req.body.form;
	// does the song exist?
	if (form.songId) {
		var text = 'SELECT song_id FROM lmb_showplanning_song WHERE song_id = $1';
		var values = [form.songId];
		client.query(text, values, (err,res) => {
			if (err) {
				console.log(err.stack);
			} else if (res.rows[0]) {
				// Update
				text = 'UPDATE lmb_showplanning_song SET title = $1, arranger = $2, song_length = $3, audio = $4 WHERE song_id = $5 RETURNING *';
				values = [form.title, form.arranger, form.length, form.audio, form.songId];
				client.query(text, values, (err,res) => {
					if (err) {
						console.log(err.stack);
					} else {
						console.log("UPDATE SUCCESS");
						console.log(res.rows[0]);
					}
				});	
			}
		});
	} else {
		// New song

		var text = 'SELECT MAX(song_id)+1 AS next_id FROM lmb_showplanning_song';
		client.query(text, (err,res) => {
			if (err) {
				console.log(err.stack);
			} else if (res.rows[0]) {
				// Insert
				text = 'INSERT INTO lmb_showplanning_song(song_id, title, arranger, song_length, audio) VALUES ($1,$2,$3,$4,$5) RETURNING *';
				var values = [res.rows[0].next_id, form.title, form.arranger, form.length, form.audio];
				client.query(text, values, (err,res) => {
					if (err) {
						console.log(err.stack);
					} else {
						console.log("INSERT SUCCESS");
						console.log(res.rows[0]);
					}
				});
			}
		});
		
	}

	res.redirect('/library');
	
});

app.get('/library', function (req, res) {
	
	client.query('SELECT * FROM lmb_showplanning_song ORDER BY song_id', (err, result) => {
		if (err) {
			console.log(err.stack);
		} else {
			// render the page.
			res.render('index', {data: result.rows, urlPath: (req.url).split("/"), isAuthenticated: req.isAuthenticated()});
		}
	});
	
});

app.get('/library/edit/:id', function (req, res) {
	
	client.query('SELECT * FROM lmb_showplanning_song WHERE song_id = $1 ', [req.params.id], (err, result) => {
		if (err) {
			console.log(err.stack);
		} else {
			// render the page.
			res.render('index', {data: result.rows, urlPath: (req.url).split("/"), isAuthenticated: req.isAuthenticated()});
		}
	});
	
});

app.get('/library/delete/:id', function (req, res) {
	
	client.query('DELETE FROM lmb_showplanning_song WHERE song_id = $1 ', [req.params.id], (err, result) => {
		if (err) {
			console.log(err.stack);
		} else {
			console.log("DELETE SUCCESS");
		}
	});

	// render the page.
	res.redirect('/library');
	
});


app.post('/login', (req, res, next) => {
	passport.authenticate('local', (err, user, info) => {
		req.login(user, (err) => {
			// redirect
			res.redirect('/');
		})
	})(req, res, next);
});

app.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});


// Shows
app.get('/shows', function (req, res) {
	// Must be logged in
	if (req.isAuthenticated()) {
		// render the page.
		res.render('index', {data: [], urlPath: (req.url).split("/"), isAuthenticated: req.isAuthenticated()});
	} else {
		res.redirect('/');
	}

});

// React JS
app.get('/src/dist/app_render.bundle.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/src/dist/app_render.bundle.js'));
});

// any public files
app.get('/public/*', function(req, res) {
	res.sendFile(path.join(__dirname + req.originalUrl));
});

// viewed at http://localhost:3000
app.get('/', function(req, res) {
	// res.sendFile(path.join(__dirname + '/public/index.html'));
	res.render('index', {data: [], urlPath: (req.url).split("/"), isAuthenticated: req.isAuthenticated()});
});
app.get('*', function(req, res) {
	// res.sendFile(path.join(__dirname + '/public/index.html'));
	// render the page.
	res.render('index', {data: [], urlPath: (req.url).split("/"), isAuthenticated: req.isAuthenticated()});
});






// Start the server
app.listen(3000, () => {
	console.log('Serving at http://localhost:3000');
});

// client.end();