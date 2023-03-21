const mongoose = require("mongoose");
const { Schema } = mongoose;
const projectSchema = new Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    column: {
      type: String,
      required: true,
    },
    createor: {
      type: String,
      required: true,
    },
    teammembers: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Projects", projectSchema);
