const { User } = require("../models"); // Importation du modèle User
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const SECRET = process.env.JWT_SECRET;

const userService = {
  // CREATE: Créer un nouvel utilisateur
  async createUser(data) {
    try {
      const newUser = await User.create(data);
      return newUser;
    } catch (error) {
      throw new Error(
        `Erreur lors de la création de l'utilisateur: ${error.message}`
      );
    }
  },

  // READ: Récupérer tous les utilisateurs
  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      throw new Error(
        `Erreur lors de la récupération des utilisateurs: ${error}`
      );
    }
  },

  // READ: Récupérer un utilisateur par ID
  async getUserById(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error("Utilisateur non trouvé");
      return user;
    } catch (error) {
      throw new Error(
        `Erreur lors de la récupération de l'utilisateur: ${error.message}`
      );
    }
  },

  // UPDATE: Mettre à jour un utilisateur par ID
  async updateUser(id, data) {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error("Utilisateur non trouvé");
      await user.update(data);
      return user;
    } catch (error) {
      throw new Error(
        `Erreur lors de la mise à jour de l'utilisateur: ${error.message}`
      );
    }
  },

  // DELETE: Supprimer un utilisateur par ID
  async deleteUser(id) {
    try {
      const user = await User.findByPk(id);
      if (!user) throw new Error("Utilisateur non trouvé");
      await user.destroy();
      return { message: "Utilisateur supprimé avec succès" };
    } catch (error) {
      throw new Error(
        `Erreur lors de la suppression de l'utilisateur: ${error.message}`
      );
    }
  },

  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) throw new Error("Email ou mot de passe incorrect.");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Mot de passe incorrect");

    const token = jwt.sign({ id: user.id_user }, SECRET, { expiresIn: "24h" });

    const newAccount = user.pseudo === null;
    return { token, newAccount };
  },

    async postAdditionalInfo(id, data) {
        try {
            const user = await User.findByPk(id);
            if (!user) {
                throw new Error("Utilisateur non trouvé");
            }
    
            const { sports, location, pseudo } = data;

      if (!sports && !location) {
        throw new Error("Aucune donnée valide pour la mise à jour");
      }

      const sports_fav = sports ? sports.join(";") : null;

            await user.update({
                sports_fav, 
                localisation: location,
                pseudo: pseudo,
            });
        } catch (error) {
            throw new Error(`Erreur lors de la mise à jour des informations supplémentaires de l'utilisateur: ${error.message}`);
        }
    },

    // Déconnexion (juste une confirmation côté serveur)
    async logout() {
        return { message: 'Déconnexion réussie' };
    },

};

module.exports = userService;
