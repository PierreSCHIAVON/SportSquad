// middlewares/auth.js
require('dotenv').config();

const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Accès interdit, token manquant' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // Ajout des infos utilisateur au `req`
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token invalide ou expiré' });
    }
};

module.exports = { verifyToken };
