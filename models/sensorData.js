const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Device = require("./device");

const SensorData = sequelize.define(
  "SensorData",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    NO2: DataTypes.FLOAT,
    CO2: DataTypes.FLOAT,
    NH3: DataTypes.FLOAT,
    humidity: DataTypes.FLOAT,
    temperature: DataTypes.FLOAT,
    deviceId: {
      type: DataTypes.INTEGER,
      references: {
        model: Device,
        key: "id",
      },
    },
  },
  {
    timestamps: true,
  }
);

Device.hasMany(SensorData, { foreignKey: "deviceId" });
SensorData.belongsTo(Device, { foreignKey: "deviceId" });

module.exports = SensorData;
