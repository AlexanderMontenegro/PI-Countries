const { Router } = require("express");
const postActivity = require("../controllers/postActivity")
const deleteActivity = require("../controllers/deleteActivity")
const { Activity, Country } = require("../db");

const router = Router();

router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, countryIds } = req.body;
    try {
        const newActivity = await postActivity(name, difficulty, duration, season, countryIds);
        return res.status(201).json(newActivity); 
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
});

router.get('/', async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: Country,
    });
    res.status(200).json(activities);
  } catch (error) {
    return res.status(400).json({error: error.message});
  }
});

router.delete('/', async (req, res) => {
    const { name } = req.query;
    try {
      const isDeleted = await deleteActivity(name);
      if (isDeleted) {
        return res.status(200).json({ message: 'Activity deleted' });
      } else {
        return res.status(404).json({ error: 'Activity not found' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Error deleting activity' });
    }
});

module.exports = router;
