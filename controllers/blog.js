const post = require("../models/postModel");
exports.blog = async (req, res, next) => {
  const posts = await post
    .find()
    .sort([["created_at", -1]])
    .limit(5);
  res.render("blog-single", {
    pageTitle: "Blog",
    message: null,
    posts,
  });
};

exports.blogByID = async (req, res, next) => {
  const { id } = req.query;
  const posts = [];
  const mainBlog = await post.findOne({ _id: id });
  posts.push(mainBlog);
  const otherBlogs = await post
    .find({ _id: { $ne: id } })
    .sort([["created_at", -1]])
    .limit(4);
  otherBlogs.map((blog) => {
    posts.push(blog);
  });

  res.render("blog-single", {
    pageTitle: "Blog",
    message: null,
    posts,
  });
};
