
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define("Country", {
    
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate: {
        len: [3, 3]
     },
   },
    
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    

    flag_img: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    capital: {
      type: DataTypes.STRING,
      allowNull: false,
     },

    subregion: {
      type: DataTypes.STRING,
    },
    
    area: {
      type: DataTypes.FLOAT,
    },

    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
     timestamps: false,
     });
};

