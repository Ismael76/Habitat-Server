const db = require("./init");
const fs = require("fs");
const seeds = fs.readFileSync(__dirname + "/dev_seed.sql").toString();
db.query(seeds, () => console.log("Dev Database Seeded"));
