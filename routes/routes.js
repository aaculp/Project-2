const express = require('express');
const placesRouter = express.Router();

const placesController = require('../controller/controller');

placesRouter.get('/login', placesController.loginIndex)
placesRouter.post('/login', placesController.loginCreate);


placesRouter.get('/:id', placesController.show);
placesRouter.put('/:id', placesController.update);
placesRouter.delete('/:id', placesController.destroy);
placesRouter.post('/', placesController.create);
placesRouter.get('/', placesController.index);

module.exports = placesRouter;
