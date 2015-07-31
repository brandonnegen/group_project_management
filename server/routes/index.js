var express = require('express');
var path = require('path');
var CreateEmp = require('../employee');

var router = express.Router();

router.get('/employee-request', function(req, res){
    res.json(new CreateEmp());
});

router.get('/*', function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, '../public', file));
});

module.exports = router;

