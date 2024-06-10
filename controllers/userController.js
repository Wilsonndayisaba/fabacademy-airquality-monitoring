const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.render("register", { success: "User created successfully" });
  } catch (error) {
    res.status(500).render("register", { error: error.message });
  }
};

exports.renderRegisterPage = (req, res) => {
  res.render("register");
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).render("login", { error: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user.id }, "wilson");
    req.session.token = token; // Store token in session
    res.redirect("/dashboard"); // Redirect to the dashboard or the page with visualizations
  } catch (error) {
    res.status(500).render("login", { error: error.message });
  }
};

exports.renderLoginPage = (req, res) => {
  res.render("login");
};
