import express from 'express';
import {body, validationResult} from 'express-validator';
import Booking from '../models/booking.model.js';

const router = express.Router();

const bookingValidationRules = [
  body('serviceType').notEmpty().withMessage('Service type is required'),
  body('name').isLength({min: 3}).withMessage('Name must be at least 3 characters long'),
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('phone').matches(/^[0-9]{10,15}$/).withMessage('Phone must be 10-15 digits'),
  body('address').notEmpty().withMessage('Date is required'),
  body('time').notEmpty().withMessage('Time is required'),
  body('message').isLength({max: 500}).withMessage('Message must be under 500 characters'),
];

router.post('/', bookingValidationRules, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array().map(err => ({
        field: err.path,
        message: err.msg
      }))
    });
  }
  
  try {
    const {serviceType, name, email, phone, address, date, time, message} = req.body;
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