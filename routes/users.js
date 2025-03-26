var express = require('express');
var router = express.Router();

let controller = require('../controller/user')

router.post('/signup',controller.SignUp)
router.post('/login',controller.Login)

module.exports = router;
