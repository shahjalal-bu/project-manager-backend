var express = require("express");
var router = express.Router();
//userController
const teamController = require("../controllers/team.controller");
/* GET users listing. */
router.post("/", teamController.create);
router.get("/", teamController.findAll);

router.put("/:teamId", teamController.findAndUpdate);
// router.post("/login", userController.login)

module.exports = router;
