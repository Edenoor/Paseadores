const { Router } = require("express");
const get_details = require("./get_details");
const postUser = require("./postUser");
const get_paseadores = require("./get_paseadores");
const router = Router();

router.use("/walkers", get_details);
router.use("/allActiveWalkers", get_paseadores);
router.use("/createUser", postUser);

module.exports = router;
