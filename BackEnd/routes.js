const express = require('express');
const router = express.Router();
const { validateRegister, validateLogin } = require('./middlewares/validator.js');
const { verifyToken } = require('./middlewares/auth.js');

const userController = require('./controllers/userController');
const eventController = require('./controllers/eventsController');

// Route to get all users
router.get('/getAllUser', validateRegister, userController.getAllUsers);
router.post('/addUser', userController.createUser);
router.get('/getEvents', eventController.getAllEvents);

module.exports = router;