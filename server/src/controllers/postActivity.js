const { Activity, Country } = require('../db');

const postActivity = async (name, difficulty, duration, season, countryIds) => {
    try {
     
        const newActivity = await Activity.create({ name, difficulty, duration, season });
        console.log('Actividad creada:', newActivity.toJSON());

        
        if (countryIds && countryIds.length > 0) {
            const countries = await Country.findAll({ where: { id: countryIds } });
            console.log('Países encontrados:', countries.map(country => country.toJSON()));
            
      
            await newActivity.addCountries(countries);
            console.log('Actividad asociada con países:', countries.map(country => country.toJSON()));
        }

        return newActivity;
    } catch (error) {
        console.error('Error creando actividad:', error);
        throw new Error('Error creating activity');
    }
};

module.exports = postActivity;