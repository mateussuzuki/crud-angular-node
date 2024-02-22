const express = require('express');
const router = express.Router();
const carBrandService = require('../services/carBrandService')


// router.get('/', async (req, res) => {
  
//   try {
//     const colors = await carColorService.getAllCarsColor();
//     res.json(colors);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.post('/', async (req, res) => {
  
  try {
    const color = await carBrandService.addBrand(req.body);
    res.json(color);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// router.put('/:id', async (req, res) => {
  
//   try {
//     const color = await carColorService.editColor(req.query.id, req.body);
//     res.json(color);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

router.delete('/', async (req, res) => {
  
  try {
    const brand = await carBrandService.deleteBrand(req.query.id);
    res.json(brand); 
  } catch (error) {
    
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;