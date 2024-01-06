import mongoose from 'mongoose';
import config from '../config/config';

interface MongoDBConnectionError extends Error {
  name: string;
  message: string;
  stack?: string;
}

const connectionString =
  config.NODE_ENV === 'production'
    ? `mongodb+srv://${config.MONGODB_USERNAME}:${config.MONGODB_PASSWORD}@budgetprod.9abgnk2.mongodb.net/`
    : `mongodb+srv://${config.MONGODB_USERNAME}:${config.MONGODB_PASSWORD}@cluster0.nq5mdrp.mongodb.net/`;

export const startConnection = async () => {
  try {
    await mongoose.connect(connectionString + `?retryWrites=true&w=majority`);
    console.log(`MongoDB connected from ${config.NODE_ENV} environment`);
  } catch (error) {
    const err: MongoDBConnectionError = error as MongoDBConnectionError;
    console.log(`Connection error: ${err.message}`);
  }
};
