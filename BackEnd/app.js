const express = require('express');
const sequelize = require('./models').sequelize_object;  
const app = express();
const userRoutes = require('./routes');
const configureMiddleware = require('./middleware/middleware');

configureMiddleware(app);

// Test database connection
async function testDBConnection() {
  try {
    await sequelize_object.authenticate({alter:true});
    await sequelize_object.sync();
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