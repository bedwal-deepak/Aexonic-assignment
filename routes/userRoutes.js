const express = require("express");
const userController = require("./../controllers/userController");
const authController = require("./../controllers/authController");
const router = express.Router();

router.post("/signup", authController.signup);

router.post("/login", authController.login);

router.get("/getAllUsers", authController.protect, userController.getAllUsers);

router
  .route("/")
  .get(authController.protect, userController.getUser)
  .post(userController.createUser);

router.route("/:id").patch(authController.protect, userController.updateUser);
module.exports = router;
