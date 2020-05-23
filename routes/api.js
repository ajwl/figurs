const express = require('express');
const router = express.Router();

/* GET users listing - uses name of module as path in url eg /api */
router.get('/', function(req, res, next) {
  console.log("api route hit")
  // take data from the request body.
  // fire off a save request to dynamo


  res.send('respond with a resource');
});

module.exports = router;
