const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const { Client } = require('pg');

const client = new Client({
	user: 'lmbapp',
	host: 'localhost',
	database: 'lmbapp',
	password: 'lmb-password',
	port: 5432,
});

client.connect();


// Initialize the app
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

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
			res.render('index', {data: result.rows});
		}
	});
	
});

app.get('/library/edit/:id', function (req, res) {
	
	client.query('SELECT * FROM lmb_showplanning_song WHERE song_id = $1 ', [req.params.id], (err, result) => {
		if (err) {
			console.log(err.stack);
		} else {
			// render the page.
			res.render('index', {data: result.rows});
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
	res.sendFile(path.join(__dirname + '/public/index.html'));
});
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});






// Start the server
app.listen(3000, () => {
	console.log('Serving at http://localhost:3000');
});

// client.end();