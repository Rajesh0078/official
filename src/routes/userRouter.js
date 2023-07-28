const express = require("express")
const {createUser, userLogin} = require("../controllers/userCtrl")
const router = express.Router();

router.post("/register", createUser)
router.post("/index", userLogin)
module.exports = router