
const {Temperament} = require('../db');

const axios = require("axios");
const { allApiInfo } = require('./controllersDogs');

const { API_KEY } = process.env;



const allApiInfoTemperaments = async () => {
    const url = await axios.get(`https://api.thedogapi.com/v1/breeds?apiKey=${API_KEY}`); 
    let temperaments = []
    let finalTemperaments=[]
    try{
    url.data.forEach((element) => {
        const temperamentsArray = (element?.temperament) ? element.temperament.split(",") : [] 

        temperamentsArray.forEach(async(temperament)=>{
            if(!temperaments.includes(temperament.trim())){
                temperaments.push(temperament.trim())
                finalTemperaments.push({name: temperament.trim()} //Trim para que no queden espacios en los costados, sino se repetian..
                )
            }
        })
        

    });try{
    Temperament.bulkCreate(finalTemperaments,{returning: true});  
}catch(error){ return {}

    } 
}
    catch(error){console.log(error)}
}


module.exports = {allApiInfoTemperaments};
