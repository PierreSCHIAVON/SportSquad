const { User } = require('../models'); // Importation du modèle User

const userService = {
    // CREATE: Créer un nouvel utilisateur
    async createUser(data) {
        try {
            const newUser = await User.create(data);
            return newUser;
        } catch (error) {
            throw new Error(`Erreur lors de la création de l'utilisateur: ${error.message}`);
        }
    },

    // READ: Récupérer tous les utilisateurs
    async getAllUsers() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération des utilisateurs: ${error}`);
        }
    },

    // READ: Récupérer un utilisateur par ID
    async getUserById(id) {
        try {
            const user = await User.findByPk(id);
            if (!user) throw new Error("Utilisateur non trouvé");
                return user;
        } catch (error) {
            throw new Error(`Erreur lors de la récupération de l'utilisateur: ${error.message}`);
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
            throw new Error(`Erreur lors de la mise à jour de l'utilisateur: ${error.message}`);
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
            throw new Error(`Erreur lors de la suppression de l'utilisateur: ${error.message}`);
        }
    },
};

module.exports = userService;
