const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("person", {
    person_id: {
      autoIncrement: 1,
      type: DataTypes.INTEGER,
      allowNull: 0,
      primaryKey: 1
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: 1
    },
    surname: {
      type: DataTypes.STRING(255),
      allowNull: 1
    },
    pnr: {
      type: DataTypes.STRING(255),
      allowNull: 1
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: 1
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: 1
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: 1,
      references: {
        model: "role",
        key: "role_id"
      }
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: 1
    }
  }, {
    sequelize,
    tableName: "person",
    timestamps: 0,
    indexes: [
      {
        name: "PRIMARY",
        unique: 1,
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
