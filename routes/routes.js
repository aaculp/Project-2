const express = require('express');
const placesRouter = express.Router();
const authHelpers = require('../services/auth/auth-helpers');

const placesController = require('../controller/controller');

// placesRouter.get('/login', placesController.loginIndex)
// placesRouter.post('/login', placesController.loginCreate);
placesRouter.get('/', placesController.index);
placesRouter.post('/', authHelpers.loginRequired, placesController.create);

placesRouter.get('/:id', authHelpers.loginRequired, placesController.show);
placesRouter.put('/:id', authHelpers.loginRequired, placesController.update);
placesRouter.delete('/:id', authHelpers.loginRequired, placesController.destroy);

module.exports = placesRouter;
