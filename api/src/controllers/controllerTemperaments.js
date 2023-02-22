
const {Temperament} = require('../db');

const axios = require("axios");
const { allApiInfo } = require('./controllersDogs');

const { API_KEY } = process.env;

 
//Model.bulkCreate(values, {returning: true})

const getTemperaments = async () => {
    return Temperament.bulkCreate(temperament,{returning: true});

}

module.exports = {getTemperaments};
