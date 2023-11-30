const newsRouter = require("./newsRouter");
const siteRouter = require("./siteRouter");

function route(app) {
  app.use("/news", newsRouter);
  app.use("/search", siteRouter);
  app.use("/", siteRouter);

  //   app.get("/", (req, res) => {
  //     res.render("home");
  //   });

  //   app.get("/news", (req, res) => {
  //     res.render("news");
  //   });

  //   app.get("/search", (req, res) => {
  //     // console.log("====================================");
  //     // console.log(req.query);
  //     // Query parameters được sử dụng để truy vấn dữ liều 1 hoặc nhiêu qua url
  //     // Query parameters thường được sử dụng để chuyền dữ liệu băng get
  //     // console.log("====================================");
  //     res.render("search");
  //   });

  //   app.post("/search", (req, res) => {
  //     console.log("====================================");
  //     console.log(req.body);
  //     console.log("====================================");
  //     res.send("");
  //   });
}

module.exports = route;
