const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("competence_profile", {
    competence_profile_id: {
      autoIncrement: 1,
      type: DataTypes.INTEGER,
      allowNull: 0,
      primaryKey: 1
    },
    person_id: {
      type: DataTypes.INTEGER,
      allowNull: 1,
      references: {
        model: "person",
        key: "person_id"
      }
    },
    competence_id: {
      type: DataTypes.INTEGER,
      allowNull: 1,
      references: {
        model: "competence",
        key: "competence_id"
      }
    },
    years_of_experience: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: 1
    }
  }, {
    sequelize,
    tableName: "competence_profile",
    timestamps: 0,
    indexes: [
      {
        name: "PRIMARY",
        unique: 1,
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
