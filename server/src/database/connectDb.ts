import mongoose from 'mongoose';
import config from '../config/config';

mongoose
  .connect(
    `mongodb+srv://${config.MONGODB_USERNAME}:${config.MONGODB_PASSWORD}@cluster0.nq5mdrp.mongodb.net/?retryWrites=true&w=majority` as string,
  )
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.log(`Connection error: ${err.message}`);
  });
