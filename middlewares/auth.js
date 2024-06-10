module.exports = (req, res, next) => {
  if (!req.session.token) {
    return res.redirect("/users/login");
  }
  next();
};
