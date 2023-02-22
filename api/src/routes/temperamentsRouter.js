const {Router} = require ('express');
const getTemperamentsHandler = require('../handlers/temperamentsHandler');
const temperamentsRouter = Router();

temperamentsRouter.get("/", getTemperamentsHandler);////Llama a la function que obtiene los temperaments de la API


module.exports = temperamentsRouter;