const { Country, Activity } = require('../db');

const infoDb = async () => {
  return await Country.findAll({
    include: {
      model: Activity,
      through: { attributes: [] },
    },
  });
};

module.exports = infoDb;