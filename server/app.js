var express = require('express');
var path = require('path');
var index = require('./routes/index');
var app = express();
var CreateEmp = require('./employee');
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/", index);

app.set("port", (process.env.PORT || 5000));

var server = app.listen(5000, function(){
    var port = server.address().port;
    console.log("Listening on port: 5000" );
});

module.exports = app;

// we put this in the terminal "npm install body-parser --save"


