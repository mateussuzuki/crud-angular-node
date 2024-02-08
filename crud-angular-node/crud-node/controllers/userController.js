const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

router.get('/', async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/verify', async (req, res) => {

  const login = req.query.login;
  const password = req.query.password
  console.log(login, password);
  return res.status(200).json({ login: `${login}` });

  try {
    const user = await userService.getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await userService.register(req.body)

    if (user) {
      return res.json('usuario criado com sucesso')
    }
    return res.json('falha ao criar o usuario')

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await userService.changeData(userId, req.body);

    if(user) {
      return res.json('usuario alterado com sucesso') 
    }

    return res.json("error")      

  } catch (error) {
    res.status(500).json({ error: error.message});
  }
  
});

router.delete('/', async (req, res) => {
  const userId = req.params

  try {
    await userService.deleteData(userId);

    if(user) {
      res.json('usuario deletado com sucesso')
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;