const express = require('express');
const placesRouter = express.Router();

const placesController = require('../controller/controller');

placesRouter.get('/login', placesController.loginIndex)
placesRouter.post('/login', placesController.loginCreate);


placesRouter.get('/:id', placesController.show);
placesRouter.put('/:id', placesController.update);
placesRouter.delete('/:id', placesController.destroy);
placesRouter.get('/', placesController.index);
placesRouter.post('/', placesController.create);

module.exports = placesRouter;
