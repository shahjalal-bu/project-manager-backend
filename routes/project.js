var express = require("express");
var router = express.Router();
//userController
const projectController = require("../controllers/project.controller");
/* GET users listing. */
router.post("/", projectController.create);
router.get("/", projectController.findAll);

// router.put("/:projectId", projectController.findAndUpdate);
// router.post("/login", userController.login)

module.exports = router;
