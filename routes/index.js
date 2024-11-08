const { createUser } = require("../controllers/users/usersController");

const router = require("express").Router();

// routes

router.post("/user", createUser);

module.exports = router;
