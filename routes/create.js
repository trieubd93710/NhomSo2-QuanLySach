const { Router } = require("express");
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send('respond with a resource');
  // res.redirect("/")
  var options = [
    {
      id: 1,
      urlImg: "",
      content: "Quản lý tài nguyên"
    },
    {
      id: 2,
      urlImg: "",
      content: "Xem sách"
    },
    {
      id: 3,
      urlImg: "",
      content: "Tìm kiếm"
    },
    {
      id: 4,
      urlImg: "",
      content: "Báo cáo"
    },
    {
      id: 5,
      urlImg: "",
      content: "Cài đặt"
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

  res.render("create-new", {
    title: "create-new",
    body: "Wellcome to",
    options: options,
    optionsChild: optionsChild,
  });
});


module.exports = router;
