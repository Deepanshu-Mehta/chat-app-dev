const express = require("express");
const { getMessage, sendMessage } = require("../Controllers/messageController.js");

const router = express.Router();

router.route("/send/:id").post( sendMessage);
router.route("/:id").get( getMessage);

module.exports = router;
