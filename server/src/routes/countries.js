const { Router } = require('express');
const router = Router();
const apiDb = require('../controllers/apiDb');
const infoDb = require('../controllers/infoDb');

router.get('/', async (req, res) => {
  const { name } = req.query;
  try {
    await apiDb();
    const countries = await infoDb();

    if (!name) {
      return res.status(200).json(countries);
    } else {
      const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );
      if (filteredCountries.length > 0) {
        return res.status(200).json(filteredCountries);
      } else {
        return res.status(404).send('Country not found');
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
});

router.get('/:idPais', async (req, res) => {
  const { idPais } = req.params;
  try {
    const country = await infoDb(idPais);

    if (country) {
      return res.status(200).json(country);
    } else {
      return res.status(404).send('Country not found');
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
});



module.exports = router;
