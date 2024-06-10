const express = require("express");
const {
  register,
  login,
  renderRegisterPage,
  renderLoginPage,
} = require("../controllers/userController");
const router = express.Router();

router.get("/register", renderRegisterPage);
router.post("/register", register);
router.get("/login", renderLoginPage);
router.post("/login", login);

module.exports = router;
