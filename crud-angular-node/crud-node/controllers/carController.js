const express = require('express');
const router = express.Router();
const carService = require('../services/carService');

router.get('/', async (req, res) => {
  
  try {
    const cars = await carService.getAllCars();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/color', async (req, res) => {
  
  try {
    const colors = await carService.getAllCarsColor();
    res.json(colors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/brand', async (req, res) => {
  
  try {
    const brand = await carService.getAllCarsBrand();
    res.json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/', async (req, res) => {
  
  try {
    const car = await carService.addCar(req.body);
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/', async (req, res) => {

  try {
    const car = await carService.deleteCar(req.query.id);
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/color', async (req, res) => {

  try {
    const car = await carService.deleteColor(req.query.id);
      res.json(car); 
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {

  
  try {
    const car = await carService.editCar(req.query.id, req.body);
    res.json(car);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;