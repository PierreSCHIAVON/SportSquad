const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
<<<<<<< HEAD

sequelize_object = new Sequelize(config.database, config.username, config.password, config);
=======
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
>>>>>>> 0940df774802383dd5df823c1ee01706695fb49d

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
<<<<<<< HEAD
    const model = require(path.join(__dirname, file))(sequelize_object, Sequelize.DataTypes);
=======
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
>>>>>>> 0940df774802383dd5df823c1ee01706695fb49d
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

<<<<<<< HEAD
db.sequelize_object = sequelize;
=======
db.sequelize = sequelize;
>>>>>>> 0940df774802383dd5df823c1ee01706695fb49d
db.Sequelize = Sequelize;

module.exports = db;