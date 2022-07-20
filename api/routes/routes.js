const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");
const habitsController = require("../controllers/habits");
const { route } = require("../server");

//User Routes
router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/", usersController.showUsers);

router.get("/habits", habitsController.showAllHabits);
router.get("/habitsCompleted", habitsController.showCompletedHabits);
router.get("/habits/:id", habitsController.showUserHabits);
router.post("/habits/create", habitsController.createHabit);
router.get("/habits/:id/:habitid", habitsController.showUserSpecificHabit);
router.patch("/habits/:id/:habitid", habitsController.updateProgression);
// router.patch("/habits/:id/:habitid", habitsController.updateCompletion);

module.exports = router;
