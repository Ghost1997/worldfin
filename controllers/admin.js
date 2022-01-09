exports.admin = async (req, res, next) => {
  res.render("admin", {
    pageTitle: "Admin",
    message: null,
  });
};
