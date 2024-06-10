const Device = require("../models/device");
const SensorData = require("../models/sensorData");

exports.createDevice = async (req, res) => {
  try {
    const { name } = req.body;
    const device = await Device.create({ name });
    res.status(201).json({ message: "Device created", device });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getDevices = async (req, res) => {
  try {
    const devices = await Device.findAll();
    res.json(devices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.renderDashboard = async (req, res) => {
  try {
    const devices = await Device.findAll();
    res.render("dashboard", { title: "Dashboard", devices });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.renderDataCollected = async (req, res) => {
  try {
    const devices = await Device.findAll();
    res.render("data-collected", { title: "Data Collected", devices });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.renderTimeChart = async (req, res) => {
  try {
    const devices = await Device.findAll();
    res.render("time-chart", { title: "Over Time Chart", devices });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.renderInstallDevice = (req, res) => {
  res.render("install-device", { title: "Install Device" });
};

exports.installDevice = async (req, res) => {
  try {
    const { name } = req.body;
    await Device.create({ name });
    res.render("install-device", {
      success: "Device installed successfully",
      title: "Install Device",
    });
  } catch (error) {
    res.status(500).render("install-device", {
      error: error.message,
      title: "Install Device",
    });
  }
};
