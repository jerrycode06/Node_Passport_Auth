module.exports = {
  ensureAuthenticated: function (req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      req.flash("error_msg", "Please Log In to view this resource");
      res.redirect("/users/login");
    }
  },
};
