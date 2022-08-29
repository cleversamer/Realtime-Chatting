const { Router } = require("express");
const router = Router();
const { authController } = require("../controllers");
const auth = require("../middleware/auth");
const validator = require("../middleware/validation/auth");

router.post(
  "/register",
  [validator.registerValidator],
  authController.register
);

router.post("/login", [validator.loginValidator], authController.signin);

router.get("/isauth", [auth("readOwn", "user")], authController.isAuth);

module.exports = router;
