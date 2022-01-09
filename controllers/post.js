const post = require("../models/postModel");
const { v4: uuidv4 } = require("uuid");

exports.getPostPage = async (req, res, next) => {
  res.render("createPost", {
    message: null,
  });
};

exports.createPost = async (req, res, next) => {
  const { title, author, description } = req.body;
  const image = req.file;
  const imageUrl = image.path;
  const Post = new post({
    _id: uuidv4(),
    title,
    author,
    image: imageUrl,
    description,
  });
  await Post.save();
  res.render("createPost", {
    message: "Post Created Sucessfully",
  });
};
