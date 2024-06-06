
const { Country, Activity } = require('../db');

const infoDb = async (idPais) => {
  if (idPais) {
    return await Country.findByPk(idPais, { include: Activity });
  }

  return await Country.findAll({ include: Activity });
};

module.exports = infoDb;
