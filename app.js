const express = require("express");
require("dotenv").config();

//database_connection
const db = require("./db/db");
db();

// const logger = require("morgan");
const cors = require("cors");

const userRouter = require("./routes/users");
const teamRouter = require("./routes/team");
const projectRouter = require("./routes/project");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/teams", teamRouter);
app.use("/projects", projectRouter);

module.exports = app;
