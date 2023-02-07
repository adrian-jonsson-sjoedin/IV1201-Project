'use strict'

var DataTypes = require("sequelize").DataTypes;
var _availability = require("./availability");
var _competence = require("./competence");
var _competence_profile = require("./competence_profile");
var _person = require("./person");
var _role = require("./role");

function initModels(sequelize) {
  var availability = _availability(sequelize, DataTypes);
  var competence = _competence(sequelize, DataTypes);
  var competence_profile = _competence_profile(sequelize, DataTypes);
  var person = _person(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);

  competence_profile.belongsTo(competence, { as: "competence", foreignKey: "competence_id"});
  competence.hasMany(competence_profile, { as: "competence_profiles", foreignKey: "competence_id"});
  availability.belongsTo(person, { as: "person", foreignKey: "person_id"});
  person.hasMany(availability, { as: "availabilities", foreignKey: "person_id"});
  competence_profile.belongsTo(person, { as: "person", foreignKey: "person_id"});
  person.hasMany(competence_profile, { as: "competence_profiles", foreignKey: "person_id"});
  person.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(person, { as: "people", foreignKey: "role_id"});

  return {
    availability,
    competence,
    competence_profile,
    person,
    role,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
