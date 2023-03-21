const Project = require("../models/Project.model");

module.exports.create = (data) => {
  return Project.create(data);
};

//find all Project
module.exports.findAll = () => {
  return Project.find();
};

// //find and update

// module.exports.findAndUpdate = async (req) => {
//   console.log(req.body);
//   const filter = { _id: req.params.ProjectId };
//   const update = { members: req.body.member };
//   return Project.findOneAndUpdate(filter, { $push: update });
// };
