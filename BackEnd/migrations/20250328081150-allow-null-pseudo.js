module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'pseudo', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('Users', 'niveau', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('Users', 'nom', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.changeColumn('Users', 'prenom', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Users', 'pseudo', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('Users', 'niveau', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('Users', 'nom', {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.changeColumn('Users', 'prenom', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  }
};
