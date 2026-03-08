// const express = require("express")
// const router = express.Router()

// const {register,login} = require("../controllers/authController")

// router.post("/register",register)
// router.post("/login",login)

// module.exports = router

const express = require("express")
const router = express.Router()

const verifyToken = require("../middleware/auth")

const { register, login, updatePhone } = require("../controllers/authController")

router.post("/register", register)

router.post("/login", login)

router.put("/phone", verifyToken, updatePhone)

module.exports = router