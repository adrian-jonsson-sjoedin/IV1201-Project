const Sequelize = require('sequelize');
/**
 * @module applications
 * This module exports a Sequelize model for the 'applications' table in the database.
 * @param {Object} sequelize - The Sequelize instance.
 * @param {Object} DataTypes - A reference to the data types used by Sequelize.
 * @returns {Object} - The Sequelize model for the 'applications' table.
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('applications', {
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
    tableName: 'applications',
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
        name: "applications_person_id_fkey",
        using: "BTREE",
        fields: [
          { name: "person_id" },
        ]
      },
    ]
  });
};
