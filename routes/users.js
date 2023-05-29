const { Router } = require("express");
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // res.send('respond with a resource');
  // res.redirect("/")
  res.render("login", {
    title: "Login Page",
    body: "Wellcome to",
    text: "Danh sách user.",
  });
});

module.exports = router;
