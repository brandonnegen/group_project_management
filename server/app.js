var express = require('express');
var index = require('./routes/index');
var app = express();
var CreateEmp = require('./employee');
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/", index);

var server = app.listen(5000, function(){
    var port = server.address().port;
    console.log("Listening on port: 5000" );
});

module.exports = app;

// we put this in the terminal "npm install body-parser --save"


