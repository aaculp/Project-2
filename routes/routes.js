const express = require('express');
const placesRoutes = express.Router();

const placesController = require('../controller/controller');

placesRoutes.get('/', placesController.index);
placesRoutes.post('/', placesController.create);

placesRoutes.get('/:id', placesController.show);
placesRoutes.put('/:id', placesController.update);
placesRoutes.delete('/:id', placesController.destroy);

module.exports = placesRoutes;
