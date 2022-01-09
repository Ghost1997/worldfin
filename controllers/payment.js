exports.payment = async (req, res, next) => {
  res.render("payment", {
    pageTitle: "Payment",
    message: null,
  });
};
