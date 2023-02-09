const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('availability', {
    availability_id: {
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
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'availability',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
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
