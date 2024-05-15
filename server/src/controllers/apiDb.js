const {Country} = require("../db");

const axios = require("axios");

 const apiData = async () => {
    try{
        const response = await axios.get("http://localhost:5000/countries");
        const countries= await response.data.map(country =>{
            return{
                id: country.cca3,
                name: country.name.common,
                flag_img: country.flag.svg,
                continent: country.continent? country.continents[0]: "undefined",
                capital: country.capital? country.capital.join(', '): "undefined",
                subregion: country.subregion? country.subregion: "undefined",
                area: country.area? country.area: "undefined",
                population: country.population? country.population: "undefined",
            }
        });
        return countries;
    } catch (error){ console.log("error al obtener los datos asociados a la Api", error);

    }
 };

 const apiDb = async () => {
    try{
        const dataBase = await country.findAll();

        if(dataBase.length < 1){
            const allCountries = await apiData();
            await country.bulkCreate(allCountries);

        }

    } catch (error){ console.log("error al cargar datos de la Api a Base de Datos");

    }
 };

 module.exports = apiData;

