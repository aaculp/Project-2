const Places = require('../model/places');
const placesController = {};

placesController.index = (req, res) => {
  Places.findAll()
    .then(fav => {
      res.json({
        message: 'ok',
        data: fav,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

placesController.show = (req, res) => {
  Places.findById(req.params.id)
    .then(fav => {
      res.json({
        message: 'ok',
        data: fav,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

placesController.create = (req, res) => {
  Places.create({
    users_id: req.body.users_id,
    venue_name: req.body.venue_name,
    venue_address: req.body.venue_address,
    reviews: req.body.reviews,
    rating: req.body.rating,
  }, req.user.id)
    .then(fav => {
      res.json({
        message: 'ok',
        data: fav,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

placesController.update = (req, res) => {
  Places.update(
    {
    reviews: req.body.reviews,
    rating: req.body.rating,
    },
    req.body.id,
  )
    .then(fav => {
      res.json({
        message: 'ok',
        data: fav,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

placesController.destroy = (req, res) => {
  Places.destroy(req.params.id)
    .then(fav => {
      res.json({
        message: 'ok',
        data: fav,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

placesController.loginIndex = (req, res) => {
  Places.findAllUsers()
    .then(users => {
      res.json({
        message: 'ok',
        data: users,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

placesController.loginCreate = (req, res) => {
  Places.loginCreate({
    username: req.body.username,
    password: req.body.password,
  })
    .then(users => {
      res.json({
        message: 'ok',
        data: users,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};


module.exports = placesController;
