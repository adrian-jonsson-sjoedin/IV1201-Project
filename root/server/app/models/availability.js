const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  return sequelize.define("availability", {
    availability_id: {
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
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: 1
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: 1
    }
  }, {
    sequelize,
    tableName: "availability",
    timestamps: 0,
    indexes: [
      {
        name: "PRIMARY",
        unique: 1,
        using: "BTREE",
        fields: [
          { name: "availability_id" },
        ]
      },
      {
        name: "availability_person_id_fkey",
        using: "BTREE",
        fields: [
          { name: "person_id" },
        ]
      },
    ]
  });
};
