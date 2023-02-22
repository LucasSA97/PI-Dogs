const { Router } = require('express');
const  dogsRouter = require('./dogsRouter');
const  temperamentsRouter  = require('./temperamentsRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/dogs", dogsRouter); //Si las peticiones se hacen a /dogs, que el use diriga a dogsRouter
router.use("/temperaments", temperamentsRouter); //Si las peticiones se hacen a /temperaments, que el use diriga a temperamentsRouter

module.exports = router;
