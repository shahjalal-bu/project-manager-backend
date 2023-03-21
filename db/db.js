const mongoose = require("mongoose");

const dbUri = process.env.MONGO_URI;

const connectDb = async () => {
  try {
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connection success!")
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = connectDb;
