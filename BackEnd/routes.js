const express = require('express');
const router = express.Router();
const userController = require('./controllers/userController');

// Route to get all users
router.get('/getAllUser', userController.getAllUsers);
router.post('/addUser', userController.createUser);

module.exports = router;