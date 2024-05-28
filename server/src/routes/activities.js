const { Router } = require("express");
const postActivity = require("../controllers/postActivity")
const deleteActivity = require("../controllers/deleteActivity")
const { Activity } = require("../db");

const router = Router();

router.post('/', async (req, res) => {
    const {name, difficulty, duration, season, countryId} = req.body;
        try {
        const newActivity = await postActivity(name, difficulty, duration, season, countryId);
        return res.status(200).json(newActivity); 
    } catch (error) {
        return res.status(400).send(error);
    }
});



router.get('/', async (req, res) => {
  try {
    const activities = await Activity.findAll();
    res.status(200).json(activities);
  } catch (error) {
    return res.status(400).send(error.message);
  }
});



  router.delete('/', async (req, res) => {
    const { name } = req.query;
    try {
      const isDeleted = await deleteActivity(name);
      if (isDeleted) {
        return res.status(200).json({ message: 'Activity deleted' });
      } else {
        return res.status(404).json({ message: 'Activity not found' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error deleting activity' });
    }
  });
    
module.exports = router;