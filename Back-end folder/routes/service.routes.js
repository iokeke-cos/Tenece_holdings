import express from 'express';
import Service from '../models/service.model.js';

const router = express.Router();

// GET all services
// GET /api/services
router.get('/', async (req, res) => {
  try {
    const {category} = req.query;
    const services = category ? await Service.find({category}) : await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({message: 'Server Error', error: error.message});
  }
});

// GET a single service by id
// GET /api/services/:id
router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({message: 'Service not found'});
    }
    res.json(service);
  } catch (error) {
    res.status(500).json({message: 'Server Error', error: error.message});
  }
});

export default router;