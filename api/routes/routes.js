const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const habitsController = require("../controllers/habits");

//User Routes
router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/", usersController.showUsers);

//Habit Routes
// router.get("/habits", habitsController.showUserHabits);
// router.post("/currentUser", habitsController.showUserHabits);

router.get("/habits/:id", habitsController.showUserHabits);

router.post("/habits/create", habitsController.createHabit);

module.exports = router;
