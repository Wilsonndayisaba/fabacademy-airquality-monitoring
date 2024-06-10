const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Device = sequelize.define(
  "Device",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Device;
