const teamService = require("../services/team.service");

module.exports.create = async (req, res) => {
  console.log(req.body);
  try {
    const team = await teamService.create(req.body);
    return res.status(200).json(team);
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};

//find all data
module.exports.findAll = async (req, res) => {
  try {
    const getData = await teamService.findAll(req);
    return res.status(200).json(getData);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
};

//find one data

// Get by id

module.exports.getById = async (req, res) => {
  try {
    const fetchedById = await teamService.getById(req.params.id);
    return res.status(200).json(fetchedById);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
};

//find one and update
module.exports.findAndUpdate = async (req, res) => {
  try {
    const updatedTeam = await teamService.findAndUpdate(req);
    return res.status(200).json(updatedTeam);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
};

//find one and delete
module.exports.findAndDelete = async (req, res) => {
  try {
    const fetchedById = await teamService.findAndDelete(req);
    return res.status(200).json(fetchedById);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
};
