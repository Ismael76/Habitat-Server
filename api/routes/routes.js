const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

router.post("/register", usersController.register);
router.post("/login", usersController.login);
router.get("/", usersController.showUsers);

module.exports = router;
