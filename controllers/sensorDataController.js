const SensorData = require("../models/sensorData");

exports.insertData = async (req, res) => {
  try {
    const { NO2, CO2, NH3, humidity, temperature, deviceId } = req.body;
    const sensorData = await SensorData.create({
      NO2,
      CO2,
      NH3,
      humidity,
      temperature,
      deviceId,
    });
    res.status(201).json({ message: "Data inserted", sensorData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLatestData = async (req, res) => {
  try {
    console.log(
      `Fetching latest sensor data for device ID: ${req.params.deviceId}`
    ); // Add logging
    const { deviceId } = req.params;
    const latestData = await SensorData.findOne({
      where: { deviceId },
      order: [["createdAt", "DESC"]],
    });
    console.log("Latest data:", latestData); // Add logging
    res.json(latestData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getLatestSensorData = async (req, res) => {
  try {
    const { deviceId } = req.params;
    const latestData = await SensorData.findOne({
      where: { deviceId },
      order: [["createdAt", "DESC"]],
    });
    res.json(latestData);
  } catch (error) {
    console.error("Error fetching latest sensor data:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.getAllData = async (req, res) => {
  try {
    const { deviceId } = req.params;
    const allData = await SensorData.findAll({
      where: { deviceId },
      order: [["createdAt", "DESC"]],
    });
    console.log("Fetched data:", allData);
    res.json(allData);
  } catch (error) {
    console.error("Error fetching all sensor data:", error);
    res.status(500).json({ error: error.message });
  }
};
