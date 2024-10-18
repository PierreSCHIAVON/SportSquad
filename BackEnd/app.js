
const express = require('express');
const Sequelize = require('sequelize');

// Importer la configuration Sequelize
const sequelize = require('./models').sequelize;  // Si tu as configuré Sequelize CLI

const app = express();

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Tester la connexion à la base de données
async function testDBConnection() {
  try {
    await sequelize.authenticate();  // Vérifie la connexion
    console.log('Connexion réussie à la base de données PostgreSQL !');
  } catch (error) {
    console.error('Impossible de se connecter à la base de données :', error);
  }
}

testDBConnection();  // Appelle la fonction pour tester la connexion

// Routes (tu peux en ajouter plus ici)
app.get('/', (req, res) => {
  res.send('Serveur Express.js fonctionne !');
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
