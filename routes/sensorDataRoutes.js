const express = require("express");
const {
  insertData,
  getLatestData,
  getAllData,
} = require("../controllers/sensorDataController");
const router = express.Router();

router.post("/", insertData);
router.get("/:deviceId/latest", getLatestData);
router.get("/:deviceId/all", getAllData);

module.exports = router;
