const express = require('express');
const router = express.Router();
const carColorService = require('../services/carColorService')


router.get('/', async (req, res) => {
  
  try {
    const colors = await carColorService.getAllCarsColor();
    res.json(colors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  
  try {
    const color = await carColorService.addColor(req.body);
    res.json(color);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  
  try {
    const color = await carColorService.editColor(req.query.id, req.body);
    res.json(color);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/', async (req, res) => {
  
  try {
    const car = await carColorService.deleteColor(req.query.id);
    res.json(car); 
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;