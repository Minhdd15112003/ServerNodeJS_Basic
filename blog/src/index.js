const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars"); // Thay handlebars bằng express-handlebars
const path = require("path");
const { log } = require("console");
const { publicDecrypt } = require("crypto");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));

// Sử dụng create method của express-handlebars để tạo instance
app.engine("handlebars", exphbs.create({ extname: ".hbs" }).engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));
// console.log("====================================");
// console.log("PATH: ", path.join(__dirname, "resources/views"));
// console.log("====================================");
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Đã gọi cổng ${port} thành công `);
});
