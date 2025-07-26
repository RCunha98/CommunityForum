import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      console.error('MONGO_URI is not defined in environment variables!');
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log('MongoDB Atlas connected successfully!');
  } catch (error: any) {
    console.error('MongoDB Atlas connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;