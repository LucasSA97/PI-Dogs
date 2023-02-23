const {allApiInfoTemperaments} = require('../controllers/controllerTemperaments')

//El handler no debe interactuar con el modelo

const getTemperamentsHandler = async (req, res) =>{
 const {temperament} = req.query;
 try{
    const allTemperaments= await allApiInfoTemperaments(temperament)
    res.status(200).json(allTemperaments) 
  }catch(error){
    res.status(400).send("Error")
  }
} 

module.exports = getTemperamentsHandler;
