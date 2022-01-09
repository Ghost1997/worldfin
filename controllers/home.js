const feed = require("../models/feedbackModel");
const news = require("../models/newsModel");
const axios = require("axios");

exports.home = async (req, res, next) => {
  const feedback = await feed
    .find()
    .sort([["created_at", -1]])
    .limit(6);
  const {
    data: { articles },
  } = await axios.get(process.env.NEWS_API_URI);

  res.render("index", {
    pageTitle: "Home",
    message: null,
    feed: feedback,
    news: articles,
  });
};
