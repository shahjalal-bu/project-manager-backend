const User = require("../models/User.model");

module.exports.create = (userinfo) => {
  return User.create(userinfo);
};
//find all team
module.exports.findAll = () => {
  return User.find();
};