const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const newsSchema = new Schema(
  {
    _id: {
      type: String,
      primaryKey: true,
      autoIncrement: true,
    },
    data: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("News", newsSchema);
