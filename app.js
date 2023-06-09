const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const userRouter = require("./routes/users");
const teamRouter = require("./routes/team");
const projectRouter = require("./routes/project");

//database_connection
const db = require("./db/db");
db();

const app = express();

// const logger = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/teams", teamRouter);
app.use("/projects", projectRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
