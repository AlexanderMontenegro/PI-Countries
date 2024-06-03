const axios = require('axios');
const { Country } = require('../db');

const apiDb = async () => {
  const countriesInDb = await Country.findAll();
  if (countriesInDb.length > 0) return;

  const { data } = await axios.get('http://localhost:5000/countries');
  const countries = data.map(country => ({
    id: country.cca3,
    name: country.name.common,
    flag_img: country.flags.png,
    continent: country.continent || country.region  ,
    capital: country.capital ? country.capital[0] : 'N/A',
    subregion: country.subregion,
    area: country.area,
    population: country.population
  }));

  await Country.bulkCreate(countries);
};

module.exports = apiDb;

