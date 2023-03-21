var express = require("express");
var router = express.Router();
//userController
const userController = require("../controllers/user.controller");
/* GET users listing. */
router.post("/", userController.create);
router.get("/", userController.findAll);

module.exports = router;
