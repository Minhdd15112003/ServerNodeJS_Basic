const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars"); // Thay handlebars bằng express-handlebars
const path = require("path");
const { log } = require("console");
const route = require("./routes/indexRouter");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(morgan("combined"));

// Sử dụng create method của express-handlebars để tạo instance
app.engine("hbs", exphbs.create({ extname: ".hbs" }).engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
// console.log("====================================");
// console.log("PATH: ", path.join(__dirname, "resources/views"));
// console.log("====================================");

// Middleware để xử lý dữ liệu từ form Dáta
app.use(express.urlencoded({ extended: true }));

// Middleware để xử lý dữ liệu JSON
app.use(express.json());

//route init khởi tạo về tuyến đường sang route/index
route(app);

app.listen(port, () => {
  console.log(`Đã gọi cổng ${port} thành công `);
});
