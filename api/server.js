const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const cron = require("node-cron");
let shell = require("shelljs");

const server = express();
server.use(cors());
server.use(express.json());

cron.schedule("40 20 * * *", function () {
  console.log("Scheduler Working!");
  if (shell.exec("node scheduleTask.js").code !== 0) {
    console.log("Something Went Wrong :(");
  }
});

// Root route
server.get("/", (req, res) => res.send("Hello, world!"));

server.use("/user", routes);

module.exports = server;
