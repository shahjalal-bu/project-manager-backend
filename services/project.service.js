const Project = require("../models/Project.model");

module.exports.create = (data) => {
  return Project.create(data);
};

//find all Project
module.exports.findAll = (req) => {
  return Project.find();
  
};

//update column name
module.exports.findAndUpdate = async (req) => {
  console.log(req);
  const filter = { _id: req.params.projectId };
  const update = { column: req.body.column };
  return Project.findOneAndUpdate(filter, update);
};

//delete a project
module.exports.findAndDelete = async (req) => {
  return Project.findOneAndDelete(req.params.projectId);
};
