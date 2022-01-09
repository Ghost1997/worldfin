const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
  {
    _id: {
      type: String,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Feedbacks", feedbackSchema);
