var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/greet', function(req, res, next) {
  res.send({message: "Hello World from the server"});
});

module.exports = router;
