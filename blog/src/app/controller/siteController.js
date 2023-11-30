class siteController {
  //[GET] /home
  home(req, res) {
    res.render("home");
  }
  //[GET] /news/search
  search(req, res) {
    res.render("search");
    // console.log("====================================");
    // console.log(req.query);
    // Query parameters được sử dụng để truy vấn dữ liều 1 hoặc nhiêu qua url
    // Query parameters thường được sử dụng để chuyền dữ liệu băng get
    // console.log("====================================");
  }
}
module.exports = new siteController();
