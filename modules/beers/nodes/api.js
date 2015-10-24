var express = require('express');
var router = express.Router();

var controller = require('./../controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  controller.retrive(req, res);
});

router.post('/', function(req, res, next) {
  controller.create(req, res);
});

router.update('/:id', function(req, res, next) {
  controller.update(req, res);
});

module.exports = router;
