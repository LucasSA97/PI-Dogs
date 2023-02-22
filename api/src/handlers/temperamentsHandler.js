const {getTemperaments} = require('../controllers/controllerTemperaments')
const axios = require("axios")
const { API_KEY } = process.env;
//El handler no debe interactuar con el modelo
const allApiInfoTemperaments = async () => {
  url = await axios.get(`https://api.thedogapi.com/v1/breeds?apiKey=${API_KEY}`);
  temperaments = await url.data.map((ele =>{
   return {name:ele.name, 
           id:ele.id,
           }
           
  }))
  Temperament.bulkCreate(temperaments,{returning: true});
  return true;
 
}

const getTemperamentsHandler = async (req, res) =>{
 //const {temperaments} = req.query;
 try{
    const allTemperaments= await allApiInfoTemperaments()
    res.status(200).json(allTemperaments) 
  }catch(error){
    res.status(400).send("Error")
  }
} 

module.exports = getTemperamentsHandler;

/*GET | /temperaments
Obtiene todos los temperamentos existentes.
Estos deben ser obtenidos de la API 
(se evaluará que no haya hardcodeo). 
Luego de obtenerlos de la API, deben ser
 guardados en la base de datos para su 
 posterior consumo desde allí.*/