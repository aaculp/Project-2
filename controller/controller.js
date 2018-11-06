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
    venue_name: req.body.venue_name,
    venue_address: req.body.venue_address,
    reviews: req.body.reviews,
    rating: req.body.rating,
  })
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
    venue_name: req.body.venue_name,
    venue_address: req.body.venue_address,
    reviews: req.body.reviews,
    rating: req.body.rating,
    },
    req.params.id,
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

module.exports = placesController;
