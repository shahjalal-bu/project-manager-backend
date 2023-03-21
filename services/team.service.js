const Team = require("../models/Team.model");

module.exports.create = (data) => {
  return Team.create(data);
};

//find all team
module.exports.findAll = () => {
  return Team.find();
};

//find and update

module.exports.findAndUpdate = async (req) => {
  console.log(req.body);
  const filter = { _id: req.params.teamId };
  const update = { members: req.body.member };
  return Team.findOneAndUpdate(filter, { $push: update });
};
