const express = require('express');
const router = express.Router();
const { validateRegister, validateLogin } = require('./middlewares/validator.js');
const verifyToken = require('./middlewares/auth.js').verifyToken;

const userController = require('./controllers/userController');
const eventController = require('./controllers/eventsController');
const authController = require('./controllers/authController.js');
const participationController = require('./controllers/participationsController');

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
 * /getUserById/{id}:
 *   get:
 *     summary: Récupère les informations d'un utilisateur par son ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID unique de l'utilisateur
 *     responses:
 *       200:
 *         description: Informations de l'utilisateur récupérées avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: ID unique de l'utilisateur
 *                 nom:
 *                   type: string
 *                   description: Nom de l'utilisateur
 *                 prénom:
 *                   type: string
 *                   description: Prénom de l'utilisateur
 *                 pseudo:
 *                   type: string
 *                   description: Prénom de l'utilisateur
 *                 email:
 *                   type: string
 *                   description: Email de l'utilisateur
 *                 niveau:
 *                   type: string
 *                   description: Niveau de l'utilisateur en sport/dans son sport
 *                 date_inscription:
 *                   type: string
 *                   format: date
 *                   description: Date d'inscription de l'utilisateur
 *                 photo:
 *                   type: string
 *                   description: URL de la photo de profil de l'utilisateur
 *                 sports_fav:
 *                   type: array
 *                   items:
 *                     type: string
 *                   description: Liste des sports favoris de l'utilisateur
 *                 localisation:
 *                   type: string
 *                   description: Localisation géographique de l'utilisateur
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */
router.get('/getUserById/:id', userController.getUserById);
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
 * /updateUser/{id}:
 *   post:
 *     summary: Met à jour les informations d'un utilisateur par son ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: L'ID unique de l'utilisateur à mettre à jour
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nom:
 *                 type: string
 *                 description: Nouveau nom de l'utilisateur
 *               email:
 *                 type: string
 *                 description: Nouvel email de l'utilisateur
 *               date_inscription:
 *                 type: string
 *                 format: date
 *                 description: Date d'inscription de l'utilisateur
 *               photo:
 *                 type: string
 *                 description: URL de la nouvelle photo de profil de l'utilisateur
 *               sports_fav:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Liste mise à jour des sports favoris de l'utilisateur
 *               localisation:
 *                 type: string
 *                 description: Nouvelle localisation de l'utilisateur
 *     responses:
 *       200:
 *         description: Informations de l'utilisateur mises à jour avec succès
 *       400:
 *         description: Requête invalide (données incorrectes ou incomplètes)
 *       404:
 *         description: Utilisateur non trouvé
 *       500:
 *         description: Erreur interne du serveur
 */
router.put('/updateUser/:id', userController.updateUser);

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
router.get('/events/:id', eventController.getEventById);
router.post('/events', verifyToken, eventController.createEvent);
router.post('/login', authController.loginUser)
router.post('/register', validateRegister, userController.createUser);
router.post('/postAdditionalInfo', verifyToken, userController.postAdditionalInfo);
router.post('/participations/user/:userId', participationController.createParticipationWithUserId);

module.exports = router;
