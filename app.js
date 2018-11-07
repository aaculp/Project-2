const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const placesRoutes = require('./routes/routes');
const loginRoutes = require('./routes/routes');

const app = express();
const port = process.env.port || 3001;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/favorites', placesRoutes);
app.use('/login', loginRoutes);

app.get('/', (req, res) => {
  res.send('Hello Welcome To Group JAS Project!');
});

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Endpoint not found!',
  });
});

app.listen(port, () => console.log(`Running on port ${port}`))
