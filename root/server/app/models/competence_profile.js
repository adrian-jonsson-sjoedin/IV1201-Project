const Sequelize = require('sequelize');
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
