const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const habitsController = require("../controllers/habits");
const { route } = require("../server");

//User Routes
router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/", usersController.showUsers);

router.get("/habitsCompleted", habitsController.showCompletedHabits);
router.get("/habits/:id", habitsController.showUserHabits);
router.post("/habits/create", habitsController.createHabit);

module.exports = router;
