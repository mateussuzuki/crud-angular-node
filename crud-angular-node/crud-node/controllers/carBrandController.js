const express = require('express');
const router = express.Router();
const carBrandService = require('../services/carBrandService')


router.get('/', async (req, res) => {
  
  try {
    const brand = await carBrandService.getAllCarsBrand();
    res.json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/', async (req, res) => {
  
  try {
    const color = await carBrandService.addBrand(req.body);
    res.json(color);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  
  try {
    const brand = await carBrandService.editBrand(req.params.id, req.body);
    res.json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/', async (req, res) => {
  
  try {
    const brand = await carBrandService.deleteBrand(req.query.id);
    res.json(brand); 
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;