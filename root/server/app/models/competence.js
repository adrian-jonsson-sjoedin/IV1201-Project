const Sequelize = require('sequelize');
/**
 * @module competence
 * This module exports a Sequelize model for the 'competence' table in the database.
 * @param {Object} sequelize - The Sequelize instance.
 * @param {Object} DataTypes - A reference to the data types used by Sequelize.
 * @returns {Object} - The Sequelize model for the 'competence' table.
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('competence', {
    competence_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'competence',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "competence_id" },
        ]
      },
    ]
  });
};
