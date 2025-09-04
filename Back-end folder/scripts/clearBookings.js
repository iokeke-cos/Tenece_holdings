import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Booking from '../models/booking.model.js';

dotenv.config();

const clearBookings = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✔ Connected to MongoDB");

    const result = await Booking.deleteMany({});
    console.log(`🗑️ Deleted ${result.deletedCount} bookings`);

    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
  } catch (error) {
    console.error('❌ Error clearing bookings:', error);
    process.exit(1);
  }
};

clearBookings();