const express = require('express');
const cors = require('cors');
const sequelize = require('./models').sequelize;  
const app = express();
const userRoutes = require('./routes');

const corsOptions = {
  origin: 'http://localhost:5173/', // URL du front
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

// Configurer CORS avec les options définies
app.use(cors(corsOptions));

// Middleware to parse JSON requests
app.use(express.json());

// Configurer CORS pour autoriser toutes les origines
app.use(cors());

// Test database connection
async function testDBConnection() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('Connexion réussie à la base de données PostgreSQL !');
  } catch (error) {
    console.error('Impossible de se connecter à la base de données :', error);
  }
}

testDBConnection();

// Use the user routes
app.use('/', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});