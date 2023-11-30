const express = require("express");
const router = express.Router();

const newsController = require("../app/controller/NewsController");

// newsController.index là chuyền fun từ bên news controller
router.use("/:slug", newsController.show);
router.use("/", newsController.index);
module.exports = router;
