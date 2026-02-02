import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('🟢 MongoDB conectado');
  } catch (error) {
    console.error('🔴 Error conectando a MongoDB:', error.message);
    process.exit(1);
  }
};
