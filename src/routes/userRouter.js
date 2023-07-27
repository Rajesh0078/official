const express = require("express")
const {createUser, userLogin} = require("../controllers/userCtrl")
const router = express.Router();

router.post("/registration", createUser)
router.post("/login", userLogin)
module.exports = router