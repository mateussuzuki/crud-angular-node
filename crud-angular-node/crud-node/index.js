const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./controllers/userController');
const carsRoutes = require('./controllers/carController');
const colorsRoutes = require('./controllers/carColorController')
const brandRoutes = require('./controllers/carBrandController')
const cors = require('cors')

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/cars', carsRoutes);
app.use('/colors', colorsRoutes);
app.use('/brands', brandRoutes);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  app.use(cors());
  next();
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});