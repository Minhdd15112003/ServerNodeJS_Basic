const express = require("express");
const router = express.Router();

const siteController = require("../app/controller/siteController");

// newsController.index là chuyền fun từ bên news controller
router.use("/search", siteController.search);
router.use("/", siteController.home);
module.exports = router;
