/**
 * @author Phong Lam
 * @description To control all requests which refers to API
 * @version 1.0.0
 * @date Apr 25, 2018
 */
'use strict';
const express = require('express');
const router = express.Router();
const apiCtrl = require('./../server/controllers/apiCtrl');
router.post('/appcenter/push', apiCtrl.push);

module.exports = router;