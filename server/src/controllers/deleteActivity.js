const { Activity, Country } = require("../db");

const deleteActivity = async (name) => {
  try {
    const activity = await Activity.findOne({ where: { name } });

    if (!activity) {
      return false; 
    }


    await activity.setCountries([]);


    await activity.destroy();

    return true; 
  } catch (error) {
    console.log('Error al eliminar  una  actividad', error);
  }
};

module.exports = deleteActivity;