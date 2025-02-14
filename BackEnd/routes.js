const express = require('express');
const router = express.Router();
const { validateRegister, validateLogin } = require('./middlewares/validator.js');

const userController = require('./controllers/userController');
const eventController = require('./controllers/eventsController');
const authController = require('./controllers/authController.js');

// Route to get all users
router.get('/getAllUser', userController.getAllUsers);
router.post('/addUser', validateRegister, userController.createUser);
router.get('/getEvents', eventController.getAllEvents);
router.post('/login', authController.loginUser)

module.exports = router;