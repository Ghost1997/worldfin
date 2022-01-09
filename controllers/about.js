exports.about = async (req, res, next) => {
  res.render("about", {
    pageTitle: "About",
    message: null,
  });
};
