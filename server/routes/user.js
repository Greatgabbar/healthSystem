const express = require('express');
const router = express.Router();
const userauth = require('../middleware/userauth');
const user = require('../controller/user');

// router.get('/checkup/:healthid', userauth, user.getCheckup);

// router.get('/prescription/:healthid', userauth, user.getPrescription);

// router.get('/schemes/:healthid', userauth, user.getSchemes);

// router.get('/national-events', user.getEvents);

module.exports = router; 