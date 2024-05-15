const { Router } = require("express");
const apiDb = require("../controllers/apiDb.js")
const infoDb = require("../controllers/infoDb.js")
const {Op} = require("sequelize");

const router = Router();

router.get("/", async (req, res) => {
    const {name} = req.query; 
    await apiDb(); 
    const DBinfo = await infoDb(); 
    
    try {
        if(!name) {

            return res.status(200).json(DBinfo);

        }
        else {
            const filteredCountry = DBinfo.filter(element => element.name.toLowerCase().includes(name.toLowerCase()));
            
             return res.status(200).json(filteredCountry)
            
        }
    } catch (error) {
        console.log(error)
        return res.status(400).send(error);
    }
});

router.get("/:idPais", async (req, res) => {
    const {idPais} = req.params; 
    const allCountry = await infoDb();

    try {
        if(idPais) {
            const idFound = await allCountry.find(country => country.id === idPais); 
           

            if(!idFound) return res.status(400).send("Id de pais no identificado");
           

            return res.status(200).json(idFound); 
        }
    } catch (error) {
        return res.status(400).send(error);
    }
});

module.exports = router;