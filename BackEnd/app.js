const express = require('express');
const sequelize = require('./models').sequelize;  
const app = express();
const userRoutes = require('./routes');
const configureMiddleware = require('./middleware/middleware');
const swaggerUi = require("./swagger/swagger");
const swaggerSetup = require("./swagger/swagger").swaggerSetup;

configureMiddleware(app);

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
app.use("/docs", swaggerUi, swaggerSetup);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}/docs`);
});