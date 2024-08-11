const { Router } = require('express');
const { formsPostHandler, handleCreatePost, consultId } = require('../handler/formsPostHandler');

const formsPostRouter = Router();

// Ruta para obtener todas las publicaciones
formsPostRouter.get('/', formsPostHandler);

// Ruta para crear una nueva publicación
formsPostRouter.post('/', handleCreatePost);

// ruta por id consulta 
formsPostRouter.get('/:id',consultId)

module.exports = { formsPostRouter };

