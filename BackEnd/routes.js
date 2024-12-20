const express = require('express');
const router = express.Router();
const { validateRegister, validateLogin } = require('./middlewares/validator.js');
const { verifyToken } = require('./middlewares/auth.js');

const userController = require('./controllers/userController');
const eventController = require('./controllers/eventsController');

// Route to get all users
router.get('/getAllUser', userController.getAllUsers);
router.post('/addUser', validateRegister, userController.createUser);
router.get('/getEvents', eventController.getAllEvents);

module.exports = router;