const userService = require('../services/userService');
const bcrypt = require('bcrypt');

// Function to get all users
async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createUser(req, res) {
  try {
      // Vérifie si un mot de passe est fourni
      if (!req.body.password) {
          return res.status(400).json({ error: 'Password is required' });
      }

      // Hashage du mot de passe avec un salt
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Remplace le mot de passe par son hash dans req.body
      const userData = {
          ...req.body,
          password: hashedPassword,
      };

      // Création de l'utilisateur via le service
      const newUser = await userService.createUser(userData);

      // Retourne l'utilisateur créé
      const { password, ...userWithoutPassword } = newUser.toJSON();
      res.status(201).json(userWithoutPassword);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

module.exports = {
    getAllUsers,
    createUser
};