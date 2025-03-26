var express = require('express');
var router = express.Router();

let controller = require('../controller/admintask')

router.post('/createtask',controller.createtask)
router.get('/gettask',controller.gettask)

module.exports = router;
