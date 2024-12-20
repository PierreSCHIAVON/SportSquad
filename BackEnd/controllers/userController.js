const userService = require('../services/userService');

// Function to get all users
async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createUser(req, res) {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getUserById(req, res) {
  try {
    const users = await userService.getUserById(req.params.id);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
};