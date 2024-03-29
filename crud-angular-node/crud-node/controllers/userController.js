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

// router.get('/', async (req, res) => {

//   const login = req.query.login;
//   const password = req.query.password


//   try {
//     const user = await userService.getUserById(userId);

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     return res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.post('/', async (req, res) => {

  data = req.body
  console.log(req.body);

  try {
    const user = await userService.register(data)

    if (user) {
      return res.json(true)
    }
    
    return res.json(false)

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/', async (req, res) => {
  
  data = req.body
  console.log(req.body);

  try {
    const user = await userService.addUser(data);

    if(user) {
      return res.json('usuario adicionado') 
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