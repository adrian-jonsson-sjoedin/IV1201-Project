const Sequelize = require('sequelize');
/**
 * @module person
 * This module exports a Sequelize model for the 'person' table in the database.
 * @param {Object} sequelize - The Sequelize instance.
 * @param {Object} DataTypes - A reference to the data types used by Sequelize.
 * @returns {Object} - The Sequelize model for the 'person' table.
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('person', {
    person_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    surname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pnr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'role',
        key: 'role_id'
      }
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'person',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "person_id" },
        ]
      },
      {
        name: "person_role_id_fkey",
        using: "BTREE",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
};
