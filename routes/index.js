const express = require('express');
const router = express.Router();
const path = require('path');
const rootPath = require('./../constants'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  const indexPath = path.join(rootPath + '/pages/index.html')
  res.sendFile(indexPath);
});

router.get('/login', function(req, res, next) {
  const loginPath = path.join(rootPath + '/pages/login.html')
  res.sendFile(loginPath);
})

module.exports = router;
