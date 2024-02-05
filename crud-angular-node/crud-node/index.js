const express = require('express');
const user = require('./userController');


const app = express()

app.use(express.json());
const port = 3003

app.listen(3003, () => (console.log(`funcionando porta ${port}`)))

app.get('/', async (req, res) => {
  const query = await user.getAllUsers();
  return res.status(200).json(query)
})

app.get('/:id', async (req, res) => {
  const query = await user.getUser(req.params.id);
  return res.status(200).json(query)
})