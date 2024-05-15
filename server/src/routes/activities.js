const { Router } = require("express");
const postActivity = require("../controllers/deleteActivity")
const deleteActivity = require("../controllers/postActivity")
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


router.get("/", async (req, res) => {
    try {
        const DataActivities = await Activity.findAll(); 
        res.status(200).json(DataActivities);
    } catch (error) {
        return res.status(400).send(error);
    }
})



router.delete("/", async (req, res) => {
    const { name } = req.query;
    try {
      const isDeleted = await deleteActivity(name);
      if (isDeleted) {
        return res.status(200).json({ message: 'Actividad eliminada' });
      } else {
        return res.status(404).json({ message: 'Actividad no encontrada' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error al eliminar la actividad' });
    }
  });
    
module.exports = router;