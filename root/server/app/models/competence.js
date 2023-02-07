const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("competence", {
    competence_id: {
      autoIncrement: 1,
      type: DataTypes.INTEGER,
      allowNull: 0,
      primaryKey: 1
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: 1
    }
  }, {
    sequelize,
    tableName: "competence",
    timestamps: 0,
    indexes: [
      {
        name: "PRIMARY",
        unique: 1,
        using: "BTREE",
        fields: [
          { name: "competence_id" },
        ]
      },
    ]
  });
};
