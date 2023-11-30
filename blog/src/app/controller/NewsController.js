class NewsController {
  //[GET] /news
  index(req, res) {
    res.render("news");
  }
  //[GET] /news:slug
  show(req, res) {
    res.send("news datail!!");
    // Đối số :slug là một tham số động trong URL, nó sẽ chấp nhận bất kỳ chuỗi nào và đặt giá trị của nó vào thuộc tính
    // console.log("====================================");
    // console.log(req.params.slug);
    // console.log("====================================");
  }
}
module.exports = new NewsController();
