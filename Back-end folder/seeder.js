// This file is used for sampling some services
// It will likely be removed later
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Service from './models/service.model.js';
import connectDB from './config/db.js';

dotenv.config();
await connectDB();

const sampleServices = [
  {
    title: 'Office Cleaning',
    description: 'Professional Office Cleaning Services',
    price: 150,
    imageUrl: 'https://example.com/office.jpg',
    category: 'Office',
    features: ['Dust removal', 'Vacuuming', 'Disinfection']
  },
  {
    title: 'Carpet Cleaning',
    description: 'Deep cleaning for carpets',
    price: 100,
    imageUrl: 'https://example.com/carpet.jpg',
    category: 'Residential',
    features: ['Stain removal', 'Deodorizing', 'Steam Cleaning']
  },
  {
    title: 'Window Cleaning',
    description: 'Crystal clear window cleaning service',
    price: 80,
    imageUrl: 'https://example.com/window.jpg',
    category: 'Residential',
    features: ['Insode & outside', 'Streak-free', 'Eco-friendly']
  },
  {
    title: 'Kitchen Cleaning',
    description: 'Thorough cleaning and sanitization of kitchen surfaces',
    price: 120,
    imageUrl: 'https://example.com/kitchen.jpg',
    category: 'Residential',
    features: ["Degreasing", "Disinfection", "Appliance cleaning"]
  },
  {
    title: 'Bathroom Cleaning',
    description: 'Detailed bathroom cleaning to maintain hygiene',
    price: 90,
    imageUrl: 'https://example.com/bathroom.jpg',
    category: 'Residential',
    features: ["Tile scrubbing", "Mold removal", "Sanitization"]
  },
  {
    title: 'Move-out Cleaning',
    description: 'Complete cleaning package for tenants moving out',
    price: 200,
    imageUrl: 'https://example.com/moveout.jpg',
    category: 'Residential',
    features: ["Floor cleaning", "Window wash", "Full disinfection"]
  }
];

const importData = async () => {
  try {
    await Service.deleteMany(); // clears old data
    await Service.insertMany(sampleServices); // adds sample data
    console.log("✔ Sample data inserted!");
    process.exit();
  } catch (error) {
    console.log('❌ Errot with data seeding:', error);
    process.exit(1);
  }
};

importData();