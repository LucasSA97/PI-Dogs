const { createDog, getAllDogs, getDogByName, getDogById, allApiInfo} = require('../controllers/controllersDogs');


//El handler no debe interactuar con el modelo

const getDogsHandler = async (req, res) => {
  const {name} = req.query;
  
  try{
  const results = name ? await getDogByName(name) : await getAllDogs()
  res.status(200).json(results)
  }catch(error){
  res.status(400).send(error.message)
  }
  }

  

const createDogHandler = async (req, res) =>{
 const {name, id, image, height, weight, life_span, temperament} = req.body
  try{
    let newDog = await createDog(name, id, image, height, weight, life_span, temperament)
    res.status(201).json(newDog) //201 de Creado
  } catch(error){
    res.status(400).json({error: error.message})
  }
};



const getDogByIdHandler = async (req, res) => {
  const {id} = req.params;                           //Si es NaN significa que sera un UUID por lo tanto que vaya a la DB, si no, es un numero y que busque 
  try{                                               //en api.
    const dog = await getDogById(id); 
    res.status(200).json(dog)
 }catch(error){
  res.status(400).json({error:error.message})    
 }
};


module.exports = { getDogsHandler, createDogHandler, getDogByIdHandler};
