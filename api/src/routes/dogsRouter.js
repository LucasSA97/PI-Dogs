const {Router} = require ('express');
const {getDogsHandler , createDogHandler, getDogByIdHandler} = require ("../handlers/dogsHandler");
const dogsRouter = Router();


//Encuentra los endpoint en dogsRoouter.


dogsRouter.get("/", getDogsHandler); //Llama a la function que obtiene los datos de la db y de la api, ya sea alldogs o por name.

dogsRouter.post("/", createDogHandler); ////Llama a la function que crea un dog.

dogsRouter.get("/:id", getDogByIdHandler); // ////Llama a la function que obtiene los ID de la raza.



module.exports = dogsRouter;  //las exportamos al index.js 



