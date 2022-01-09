const feed = require("../models/feedbackModel");
const random = require("random");
exports.feedback = async (req, res, next) => {
  res.render("feedback", {
    message: null,
  });
};

exports.postFeedback = async (req, res, next) => {
  const Feedback = new feed({
    _id: random.int((min = 10000000), (max = 100000000)),
    name: req.body.name,
    profession: req.body.pro,
    feedback: req.body.feedback,
  });
  await Feedback.save();
  res.render("feedback", {
    message: "Thanks For Your Valuable Feedback",
  });
};
