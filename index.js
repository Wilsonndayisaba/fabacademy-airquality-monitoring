const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const { engine } = require("express-handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const Handlebars = require("handlebars");
const sequelize = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const deviceRoutes = require("./routes/deviceRoutes");
const sensorDataRoutes = require("./routes/sensorDataRoutes");
const { renderDashboard } = require("./controllers/deviceController");

const app = express();

app.engine(
  "handlebars",
  engine({
    extname: ".handlebars",
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(
  session({
    secret: "wilson",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use("/users", userRoutes);
app.use("/devices", deviceRoutes);
app.use("/sensordata", sensorDataRoutes);

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/dashboard", (req, res) => {
  renderDashboard(req, res);
});

sequelize
  .sync()
  .then(() => {
    console.log("Database connected and synchronized");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
