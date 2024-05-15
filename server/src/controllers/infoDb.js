const {Country} = require("../db.js");
const {Activity} = require("../db.js");


const infoDb = async () => {
    try {
        return await Country.findAll({
            include: {
                model: Activity,
                attributes: ["name", "difficulty", "duration", "season"],
                through: { attributes: [],
                },
            }
        }) 
    } catch (error) {
        console.log("Error al obtener todos los Paises incluyendo sus Actividades", error);
    }
};

module.exports = infoDb;