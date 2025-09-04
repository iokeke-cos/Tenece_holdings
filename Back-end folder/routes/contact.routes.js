import express from 'express';
import ContactRequest from '../models/contact.model.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {name, email, subject, message} = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({message: 'Name, email, and message are required'});
    }

    const contact = new ContactRequest({name, email, subject, message});
    const savedContact = await contact.save();

    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({message: 'Error submitting contact form', error: error.message});
  }
});

router.get('/', async (req, res) => {
  try {
    const contacts = await ContactRequest.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({message: 'Error fetching contacts', error: error.message});
  }
});

export default router;