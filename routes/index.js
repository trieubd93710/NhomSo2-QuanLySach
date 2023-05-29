var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  var options = [
    {
      id: 1,
      urlImg: "",
      content: "Quản lý tài nguyên"
    },
    {
      id: 2,
      urlImg: "",
      content: ""
    },
    {
      id: 3,
      urlImg: "",
      content: ""
    },
    {
      id: 4,
      urlImg: "",
      content: ""
    },
    {
      id: 5,
      urlImg: "",
      content: ""
    },
  ];
  var optionsChild = [
    {
      id: 1,
      urlImg: "",
      content: "Quản lý sách"
    },
    {
      id: 2,
      urlImg: "",
      content: "Lĩnh vực"
    },
    {
      id: 3,
      urlImg: "",
      content: "Tác giả"
    },
    {
      id: 4,
      urlImg: "",
      content: "Nhà xuất bản"
    },
    {
      id: 5,
      urlImg: "",
      content: "Nhà cung cấp"
    },
  ];
  var logos = [
    {
      urlImg: "",
      name: "BookStore",
      slogon: "Nâng tầm tri thức"
    },
  ];
  res.render("index", {
    title: "home_page",
    options: options,
    optionsChild: optionsChild,
    logos: logos,
  });
});

module.exports = router;
