// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'me',
	password: 'secret',
	database: 'my_db'
});

// Initialize the app
const app = express();


// API CALLS
app.get('/library/post', function (req, res) {
	connection.connect();

	// connection.query('SELECT * FROM posts LIMIT 0, 10', function (error, results, fields) {
	// 	if (error) throw error;
	// 	res.send(results)
	// });

	connection.end();
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