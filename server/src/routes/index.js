const { Router } = require("express");
const router = Router();
const countries = require("./countries")
const activities = require("./activities")

router.use("/countries", countries);
router.use("/activities", activities);

router.use((req, res) => {
    res.status(404).send("Not Found");
  });

module.exports = router;