const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const habitsController = require("../controllers/habits");

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/", usersController.showUsers);
router.get("/habits", habitsController.showHabits);

module.exports = router;
