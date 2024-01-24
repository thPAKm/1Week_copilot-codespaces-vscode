// Create web server
// Run: node comments.js
// Test: curl -i http://localhost:8080/comments
// Test: curl -i http://localhost:8080/comments/1

// Load the express module
var express = require('express');

// Create our express app
var app = express();

// Set the port for our server
var port = 8080;

// Load the filesystem module
var fs = require('fs');

// Load the body-parser module
var bodyParser = require('body-parser');

// Load the path module
var path = require('path');

// Load the comments.json file
var comments = JSON.parse(fs.readFileSync('comments.json'));

// Use the body-parser module
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the ejs view engine
app.set('view engine', 'ejs');

// Set the path to the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the path to the static files directory
app.use(express.static(__dirname + '/public'));

// Set the path to the bower files directory
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// Set the path to the node_modules directory
app.use('/node_modules',  express.static(__dirname + '/node_modules'));

// Set the path to the images directory
app.use('/images',  express.static(__dirname + '/images'));

// Set the path to the scripts directory
app.use('/scripts',  express.static(__dirname + '/scripts'));

// Set the path to the styles directory
app.use('/styles',  express.static(__dirname + '/styles'));

// Set the path to the fonts directory
app.use('/fonts',  express.static(__dirname + '/fonts'));

// Set the path to the data directory
app.use('/data',  express.static(__dirname + '/data'));

// Set the path to the data directory
app.use('/views',  express.static(__dirname + '/views'));

// Set the path to the views directory
app.use('/views/partials',  express.static(__dirname + '/views/partials'));

// Set the path to the views directory
app.use('/views/partials/comments',  express.static(__dirname + '/views/partials/comments'));

// Set the path to the views directory
app.use('/views/partials/comments/comment',  express.static(__dirname + '/views/partials/comments/comment'));

// Set the path to the