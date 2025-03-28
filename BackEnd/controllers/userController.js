const userService = require('../services/userService');
const bcrypt = require('bcrypt');
const { User } = require('../models'); 

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
          return res.status(400).json({ error: 'Le mot de passe est requis.' });
      }
      email = req.body.email;

      // Vérifie si l'email existe déjà
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
          return res.status(400).json({ error: 'Cette email est déjà associé à un compte existant, veuillez vous connecter.' });
      }

      // Hashage du mot de passe avec un salt
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Remplace le mot de passe par son hash dans req.body
      const userData = {
          ...req.body,
          password: hashedPassword
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