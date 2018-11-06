const Places = require('../models/places');

const placesController = {};

placesController.index = (req, res) => {
  Places.findAll()
    .then(icecreams => {
      res.json({
        message: 'ok',
        data: icecreams,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

placesController.show = (req, res) => {
  Places.findById(req.params.id)
    .then(icecream => {
      res.json({
        message: 'ok',
        data: icecream,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

placesController.create = (req, res) => {
  Places.create({
    flavor: req.body.flavor,
    description: req.body.description,
    rating: req.body.rating,
    url: req.body.url,
  })
    .then(icecream => {
      res.json({
        message: 'ok',
        data: icecream,
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
      flavor: req.body.flavor,
      description: req.body.description,
      rating: req.body.rating,
      url: req.body.url,
    },
    req.params.id,
  )
    .then(icecream => {
      res.json({
        message: 'ok',
        data: icecream,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

placesController.destroy = (req, res) => {
  Places.destroy(req.params.id)
    .then(icecream => {
      res.json({
        message: 'ok',
        data: icecream,
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};

module.exports = placesController;
