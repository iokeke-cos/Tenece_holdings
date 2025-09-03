import express from 'express';
import Booking from '../models/booking.model.js';


const router = express.Router();


router.post('/', async (req, res) => {
  try {
    const {category} = req.query;
    const bokings = category ? await Booking.find({category}) : await Booking.find();
    res.json(bokings);
  } catch (error) {
    res.status(500).json({message: 'Server Error', error: error.message});
  }
});



// Store bookings in-memory (for now, later you can save to DB)
let bookings = [];

// POST /bookings endpoint
app.post("/bookings", (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    serviceAddress,
    preferredDate,
    preferredTime,
    serviceType,
    specialRequests,
  } = req.body;

  // Basic validation
  if (!firstName || !lastName || !email || !phone || !serviceAddress) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all required fields.",
    });
  }

  const newBooking = {
    id: bookings.length + 1,
    firstName,
    lastName,
    email,
    phone,
    serviceAddress,
    preferredDate,
    preferredTime,
    serviceType,
    specialRequests,
    createdAt: new Date(),
  };

  bookings.push(newBooking);

  res.status(201).json({
    success: true,
    message: "Booking received successfully!",
    booking: newBooking,
  });
});


export default router;