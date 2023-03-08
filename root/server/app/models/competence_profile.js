const Sequelize = require('sequelize');
/**
 * @module competence_profile
 * This module exports a Sequelize model for the 'competence_profile' table in the database.
 * @param {Object} sequelize - The Sequelize instance.
 * @param {Object} DataTypes - A reference to the data types used by Sequelize.
 * @returns {Object} - The Sequelize model for the 'competence_profile' table.
 */
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('competence_profile', {
    competence_profile_id: {
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
    competence_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'competence',
        key: 'competence_id'
      }
    },
    years_of_experience: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'competence_profile',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "competence_profile_id" },
        ]
      },
      {
        name: "competence_profile_competence_id_fkey",
        using: "BTREE",
        fields: [
          { name: "competence_id" },
        ]
      },
      {
        name: "competence_profile_person_id_fkey",
        using: "BTREE",
        fields: [
          { name: "person_id" },
        ]
      },
    ]
  });
};
