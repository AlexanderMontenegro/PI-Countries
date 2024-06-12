
const { Router } = require("express");
const router = Router();
const postActivity = require("../controllers/postActivity");
const deleteActivity = require("../controllers/deleteActivity");
const { Activity, Country } = require("../db");


const validSeasons = ['Spring', 'Summer', 'Autumn', 'Winter'];


router.post('/', async (req, res) => {
    const { name, difficulty, duration, season, countryIds } = req.body;
   
    if (!validSeasons.includes(season)) {
      return res.status(400).json({ error: `La temporada "${season}" no es válida` });
    }
    try {
        const newActivity = await postActivity(name, difficulty, duration, season, countryIds);
        return res.status(201).json(newActivity);
    } catch (error) {
        
        return res.status(400).json({ error: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const activities = await Activity.findAll({
            include: Country,
        });
        res.status(200).json(activities);
    } catch (error) {
       
        return res.status(400).json({ error: error.message });
    }
});



router.delete('/:name', async (req, res) => {
    const { name } = req.params;
    if (!name) {
        return res.status(400).json({ error: 'El parámetro "name" es requerido' });
    }
    try {
        const isDeleted = await deleteActivity(name);
        if (isDeleted) {
            return res.status(200).json({ message: 'Actividad eliminada' });
        } else {
            return res.status(404).json({ error: 'Actividad no encontrada' });
        }
    } catch (error) {
      
        return res.status(500).json({ error: 'Error eliminando la actividad' });
    }
  });
  


module.exports = router;
