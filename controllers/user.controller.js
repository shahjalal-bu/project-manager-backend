const userService = require("../services/user.service");

module.exports.create = async (req, res) => {
  try {
    const user = await userService.create(req.body);
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
  try {
    const getData = await userService.findAll();
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
    const fetchedById = await userService.getById(req.params.id);
    return res.status(200).json(fetchedById);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
};
//find one and update
module.exports.findOneAndUpdate = async (req, res) => {
  try {
    const fetchedById = await userService.findOneAndUpdate(req);
    return res.status(200).json(fetchedById);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
};
//find one and delete
module.exports.findAndDelete = async (req, res) => {
  try {
    const fetchedById = await userService.findAndDelete(req);
    return res.status(200).json(fetchedById);
  } catch (e) {
    console.error(e);
    return res.status(400).json(e);
  }
};
