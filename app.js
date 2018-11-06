const express = require('express');
const app = express();
const port = process.env.port || 3001;

const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

app.use(logger('dev'));
app.use(express.static('client/build'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello Welcome To Group JAS Project!');
});

const placesRoutes = require('./routes/routes');
app.use('/places', placesRoutes);

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Endpoint not found!',
  });
});

app.listen(port, () => console.log(`Running on port ${port}`))
