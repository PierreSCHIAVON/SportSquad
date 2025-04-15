const userService = require('../services/userService');

// Fonction pour connecter un utilisateur
async function loginUser(req, res) {
    const { email, password } = req.body;
    try {
        const response = await userService.login(email, password);

        const { token, userId, newAccount } = response;

        res.status(200).json({
            token,
            userId,
            newAccount,
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
async function logoutUser(req, res) {
    try {
        // Côté serveur, on n'a pas besoin de faire grand-chose pour la déconnexion
        // On renvoie juste un message de confirmation
        const response = await userService.logout();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { loginUser, logoutUser };
