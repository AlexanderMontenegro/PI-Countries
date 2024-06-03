const { Activity, Country } = require('../db');

const postActivity = async (name, difficulty, duration, season, countryIds) => {
  if (!name || !difficulty || !countryIds || countryIds.length === 0) {
    throw new Error('Missing required fields');
  }

  const newActivity = await Activity.create({ name, difficulty, duration, season });

  const countries = await Country.findAll({
    where: {
      id: countryIds,
    },
  });

  await newActivity.addCountries(countries);
  return newActivity;
};

module.exports = postActivity;
