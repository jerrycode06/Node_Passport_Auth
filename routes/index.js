const express = require("express");
const { render } = require("ejs");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

//Welcome Page
router.get("/", (req, res) => {
  //   res.send("Welcome");
  res.render("welcome");
});

//Dashboard Page
router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.render("dashboard", {
    name: req.user.name,
  });
});

module.exports = router;
