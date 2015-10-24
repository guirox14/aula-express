var express = require('express');
var router = express.Router();

var controller = require('./../controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  controller.retrive(req, res);
});

module.exports = router;
