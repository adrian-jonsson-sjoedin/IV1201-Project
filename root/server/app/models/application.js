const Sequelize = require('sequelize');
/**
 * @module application
 * This module exports a Sequelize model for the 'application' table in the database.
 * @param {Object} sequelize - The Sequelize instance.
 * @param {Object} DataTypes - A reference to the data types used by Sequelize.
 * @returns {Object} - The Sequelize model for the 'application' table.
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('application', {
    application_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'person',
        key: 'person_id'
      }
    },
    application_status: {
      type: DataTypes.ENUM('accepted','rejected','unhandled'),
      allowNull: true,
      defaultValue: "_utf8mb4\\'unhandled\\'"
    }
  }, {
    sequelize,
    tableName: 'application',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "application_id" },
        ]
      },
      {
        name: "application_person_id_fkey",
        using: "BTREE",
        fields: [
          { name: "person_id" },
        ]
      },
    ]
  });
};
