import express from 'express';
import Booking from '../models/booking.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {serviceType, name, email, phone, address, date, time, message} = req.body;

    if (!serviceType || !name || !email || !date || !time) {
      return res.status(400).json({message: 'Required fields missing'});
    }

    const bookingDate = new Date(`${date}T${time}`);

    const booking = new Booking({
      serviceType,
      customerName: name,
      customerEmail: email,
      phoneNumber: phone,
      address,
      bookingDate,
      message,
    });

    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({message: 'Error creating booking', error: error.message});
  }
});

router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find().sort({createdAt: -1});
    res.json(bookings);
  } catch (error) {
    res.status(500).json({message: 'Error fetching bookings', error: error.message});
  }
});

router.get('/:id', async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({message: 'Booking not found'});
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({message: 'Error fetching booking', error: error.message});
  }
});

export default router;