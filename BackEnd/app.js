const express = require('express');
<<<<<<< HEAD
const cors = require('cors');
require('./models').sequelize_object;
require('dotenv').config();
=======
const sequelize = require('./models').sequelize;  
const app = express();
const userRoutes = require('./routes');
const configureMiddleware = require('./middleware/middleware');
const swaggerUi = require("./swagger/swagger");
const swaggerSetup = require("./swagger/swagger").swaggerSetup;
>>>>>>> develop

const corsOptions = {
    origin: 'http://localhost:5173', // URL du front
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

<<<<<<< HEAD
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
=======
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
>>>>>>> develop

const userRoutes = require('./routes');
app.use('/', userRoutes);
app.use("/docs", swaggerUi, swaggerSetup);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
<<<<<<< HEAD
});

=======
  console.log(`http://localhost:${PORT}/docs`);
});
>>>>>>> develop
