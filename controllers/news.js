const news = require("../models/newsModel");
const random = require("random");
exports.news = async (req, res, next) => {
  res.render("news", {
    message: null,
  });
};

exports.postNews = async (req, res, next) => {
  const News = new news({
    _id: random.int((min = 10000000), (max = 100000000)),
    data: req.body.data,
    link: req.body.link,
  });
  await News.save();
  res.render("news", {
    message: "News Posted Sucessfully",
  });
};
