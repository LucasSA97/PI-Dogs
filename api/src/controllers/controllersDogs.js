
const { Dog, Temperament } = require('../db');

const axios = require("axios");
const { Op } = require('sequelize');

const { API_KEY } = process.env;





//*Creo la funcion para mapear los elementos en getAllDogs
const cleanArray=(arr)=>
  arr.map(ele =>{
     return {name:ele.name, 
             id:ele.id,
             image:ele.image.url,
             height:ele.height.metric,
             weight:ele.weight.metric,
             temperament:ele.temperament,
             life_span:ele.life_span,

             

    }
});

//Creo una funcion para traerme toda la info de la Api y usarla en otros metodos.

const allApiInfo = async () => {
    url = await axios.get(`https://api.thedogapi.com/v1/breeds?apiKey=${API_KEY}`);
    getInfo = await url.data.map((ele =>{
     return {name:ele.name, 
             id:ele.id,
             image:ele.image.url,
             height:ele.height.metric,
             weight:ele.weight.metric,
             temperament:ele.temperament,
             life_span:ele.life_span,}
    }))
    
   return getInfo;
}


const getDogById = async (id) => {
   if(!isNaN(id)){
   const dog = await axios(`https://api.thedogapi.com/v1/breeds/${id}?apiKey=${API_KEY}`)
   return dog.data
  } else{
    const dog = await Dog.findByPk(id);
    
    return dog;
  }
  
   }

 
//Buscara en la api y en la db y los concatenara:

const getAllDogs = async () => {
 
    const allDogsDB = await Dog.findAll({
        include:{
            model:Temperament,
            atributes: ["name"],
            through: {atributes:[],}
        }
    })

    const allDogsApi = await allApiInfo()
    
    
    return [...allDogsApi, ...allDogsDB]
};






const getDogByName= async(name)=>{
    const allDogsDB = await Dog.findAll({
        include:{
            model:Temperament,
            atributes: ["name"],
            through: {atributes:[],}
        },where: {
            name:{[Op.like]:'%'+ name +'%'} //Santi hizo la magia; https://www.w3schools.com/sql/sql_like.asp   
        }
    })
     
    const allDogsApi = await allApiInfo()

    const allDogs = allDogsApi.concat(allDogsDB);

    const filteredDog= allDogs.filter((dog) =>dog.name.toLowerCase().includes(name.toLowerCase()))
    if(!filteredDog.length) throw Error("Not results")
    else return filteredDog;
    
}



const createDog= async (name, id, image, height, weight, life_span, temperament ) => {
const dogCreate = await Dog.create( {name, id, image, height, weight, life_span, temperament} )
const temperamentDb = await Temperament.findAll({
    where: {
        name: temperament,
    }
})
 dogCreate.addTemperament(temperamentDb)
 dogCreate.save();                         //Guardo el perro creado.
 return dogCreate;

}
 
 


module.exports = { createDog, getAllDogs, getDogByName, getDogById, allApiInfo}

