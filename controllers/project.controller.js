const projectService = require("../services/project.service");

module.exports.create = async (req, res) => {
  try {
    const user = await projectService.create(req.body);
    return res.status(200).json(user);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

//find all data
module.exports.findAll = async (req, res) => {
  console.log(req.query);
  try {
    const projects = await projectService
      .findAll()
      .populate({
        path: "teammembers",
        select: "members",
      })
      .lean();
    const modifiedProjects = projects.map((project) => {
      if (!project.teammembers[0].members.includes(req.query.email)) return [];
      project.teammembers = project.teammembers[0].members;
      return project;
    });
    return res.status(200).json(modifiedProjects);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
};

//find one data

// Get by id
module.exports.getById = async (req, res) => {
  try {
    const fetchedById = await projectService.getById(req.params.id);
    return res.status(200).json(fetchedById);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
};
//find one and update
module.exports.findAndUpdate = async (req, res) => {
  try {
    const fetchedById = await projectService.findAndUpdate(req);
    return res.status(200).json(fetchedById);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
};

//find one and delete
module.exports.findAndDelete = async (req, res) => {
  try {
    const fetchedById = await projectService.findAndDelete(req);
    return res.status(200).json(fetchedById);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
};
