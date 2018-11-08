const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controller/users-controllers');

authRouter.get('/', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login', {
    currentPage: 'login',
  });
});

authRouter.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register', {
    currentPage: 'login',
  });
});

authRouter.post('/register', usersController.create);

authRouter.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true,
  })
);

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;
