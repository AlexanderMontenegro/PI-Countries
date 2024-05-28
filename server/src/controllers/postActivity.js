/* 

const { Activity } = require("../db");

const postActivity = async (name, difficulty, duration, season, countryId) => {
    try {
        let [actividad, created] = await Activity.findOrCreate({
            where: {
                name,
                difficulty,
                duration,
                season,

            }
        })

        await actividad.setCountries(countryId);
        return actividad;

        
    } catch (error) {
        console.log("erros al crear actividades", error);

    }
}

module.exports = postActivity;

*/



const { Activity, Country } = require('../db');

const postActivity = async (name, difficulty, duration, season, countryIds) => {
  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  const countries = await Country.findAll({
    where: {
      id: countryIds,
    },
  });

  await newActivity.addCountries(countries);
  return newActivity;
};

module.exports = postActivity;