const express = require("express");
const router = express.Router();
const authcontrollers = require("../controller/auth_controller");
const { signupSchema, loginSchema } = require("../validators/auth_validator");
const validate = require("../middlewares/validate_middleware");
const authMiddleware = require("../middlewares/auth_middleware");


// router.get("/", (req, res) => {
//     res
//         .status(200)
//         .send("welcome using router");
// });

router.route("/").get(authcontrollers.home);

router
.route('/register')
.post(validate(signupSchema), authcontrollers.register);

router.route('/login').post(validate(loginSchema), authcontrollers.login);

router.route('/user').get(authMiddleware, authcontrollers.user);


module.exports = router;
