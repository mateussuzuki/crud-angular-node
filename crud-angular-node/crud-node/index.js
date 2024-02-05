const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./controllers/userController');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.use(cors())

app.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});