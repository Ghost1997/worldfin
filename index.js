const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes/router");
const notFound = require("./controllers/404");
var multer = require("multer");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "accounting")));

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, "img" + Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/", routes);
app.use(notFound.get404);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(process.env.PORT || 8080);
    console.log("DB connected");
    console.log(`server is on port ${process.env.PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
