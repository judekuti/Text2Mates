// 1. create handles for dependencies
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');


// Init app
const app = express();

// 2. Template engine setup
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);



// 3. create folder for static files called public
app.use(express.static(__dirname + '/public'));

// 4. Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// 9. Index route - create folder for views to hold index route
app.get('/', (req, res) => {
  res.render('index');
});

// 8a.  Define port
const port = 3000;

// 8b. Start server
const server = app.listen(port, () => console.log(`Server started on port ${port}`));
