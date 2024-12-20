const express = require('express');
const router = express.Router();
const { validateRegister, validateLogin } = require('./middlewares/validator.js');
const { verifyToken } = require('./middlewares/auth.js');

const userController = require('./controllers/userController');
const eventController = require('./controllers/eventsController');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gestion des utilisateurs
 */

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Gestion des événements
 */

/**
 * @swagger
 * /getAllUser:
 *   get:
 *     summary: Récupère tous les utilisateurs
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Liste de tous les utilisateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID unique de l'utilisateur
 *                   nom:
 *                     type: string
 *                     description: Nom de l'utilisateur
 *                   email:
 *                     type: string
 *                     description: Email de l'utilisateur
 */
router.get('/getAllUser', userController.getAllUsers);
/**
 * @swagger
 * /addUser:
 *   post:
 *     summary: Ajoute un nouvel utilisateur
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Nom de l'utilisateur
 *                 example: John
 *               prenom:
 *                 type: string
 *                 description: Prénom de l'utilisateur
 *                 example: Doe
 *               pseudo:
 *                 type: string
 *                 description: Pseudo de l'utilisateur
 *                 example: johndoe123
 *               email:
 *                 type: string
 *                 description: Adresse email de l'utilisateur
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 description: Mot de passe de l'utilisateur
 *                 example: "mypassword123"
 *     responses:
 *       201:
 *         description: Utilisateur ajouté avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id_user:
 *                   type: integer
 *                   description: ID unique de l'utilisateur
 *                 nom:
 *                   type: string
 *                   description: Nom de l'utilisateur
 *                 prenom:
 *                   type: string
 *                   description: Prénom de l'utilisateur
 *                 pseudo:
 *                   type: string
 *                   description: Pseudo de l'utilisateur
 *                 email:
 *                   type: string
 *                   description: Adresse email de l'utilisateur
 */
router.post('/addUser', userController.createUser);

/**
 * @swagger
 * /getEvents:
 *   get:
 *     summary: Récupère tous les événements
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: Liste de tous les événements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID unique de l'événement
 *                   title:
 *                     type: string
 *                     description: Titre de l'événement
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: Date de l'événement
 */
router.get('/getEvents', eventController.getAllEvents);

module.exports = router;
