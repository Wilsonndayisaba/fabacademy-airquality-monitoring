const { Sequelize } = require("sequelize");
const config = require("./config.json").development;

// const sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   {
//     host: config.host,
//     dialect: config.dialect,
//   }
// );
const sequelize = new Sequelize("postgresql://postgres:cpAQAoEpRJqPpbGISvYNretLpgrPpkIt@roundhouse.proxy.rlwy.net:42387/railway");

module.exports = sequelize;
