const { Router } = require('express');
const apiDb = require('../controllers/apiDb');
const infoDb = require('../controllers/infoDb');

const router = Router();

router.get('/', async (req, res) => {
  const { name } = req.query;
  await apiDb();
  const countries = await infoDb();

  try {
    if (!name) {
      return res.status(200).json(countries);
    } else {
      const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );
      return res.status(200).json(filteredCountries);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).send(error.message);
  }
});

router.get('/:idPais', async (req, res) => {
  const { idPais } = req.params;
  const allCountries = await infoDb();

  try {
    if (idPais) {
      const country = allCountries.find((c) => c.id === idPais);
      if (country) {
        return res.status(200).json(country);
      } else {
        return res.status(404).send('Country not found');
      }
    }
  } catch (error) {
    return res.status(400).send(error.message);
  }
});

module.exports = router;