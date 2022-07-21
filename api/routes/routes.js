const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const habitsController = require("../controllers/habits");
const profileImageController = require("../controllers/images");
const { route } = require("../server");

//User Routes
router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/", usersController.showUsers);

//Habit Routes
router.get("/habits", habitsController.showAllHabits);
router.get("/habits/:id", habitsController.showUserHabits);
router.get("/habits/:id/:habitid", habitsController.showUserSpecificHabit);
router.get("/completed/:id", habitsController.showCompletedHabits);
router.post("/habits/create", habitsController.createHabit);
router.patch("/habits/:id/:habitid", habitsController.updateProgression);
router.delete("/habits/:id/:habitid", habitsController.deleteHabit);

//Profile Image Routes
router.get("/profileImage", profileImageController.getAllImages);

module.exports = router;
