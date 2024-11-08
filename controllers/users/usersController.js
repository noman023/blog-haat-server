const UserModel = require("../../models/userModel");

async function createUser(req, res) {
  try {
    const user = new UserModel(req.body);
    await user.save();

    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(400).send("Error creating user: " + error.message);
  }
}

module.exports = { createUser };
