const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.post('/register', controller.registerUser);
router.post('/login', controller.loginUser);
router.post('/feedback', controller.submitFeedback);

module.exports = router;
