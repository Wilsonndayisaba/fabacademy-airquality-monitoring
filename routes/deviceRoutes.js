const express = require("express");
const {
  createDevice,
  getDevices,
  renderDashboard,
  renderDataCollected,
  renderTimeChart,
  renderInstallDevice,
  installDevice,
} = require("../controllers/deviceController");
const auth = require("../middlewares/auth");
const router = express.Router();

router.post("/", auth, createDevice);
router.get("/", auth, getDevices);
router.get("/dashboard", auth, renderDashboard);
router.get("/data-collected", auth, renderDataCollected);
router.get("/time-chart", auth, renderTimeChart);
router.get("/install", auth, renderInstallDevice);
router.post("/install", auth, installDevice);

module.exports = router;
