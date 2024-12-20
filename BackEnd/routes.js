const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');
const eventController = require('./controllers/eventsController');

// Route to get all users
router.get('/getAllUser', userController.getAllUsers);
router.get('/getUserById/:id', userController.getUserById);
router.post('/addUser', userController.createUser);
router.get('/getEvents', eventController.getAllEvents);

module.exports = router;