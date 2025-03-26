var express = require('express');
var router = express.Router();

let controller = require('../controller/admin')

router.post('/signup',controller.SignUp)
router.post('/login',controller.Login)

module.exports = router;
