import { startConnection } from '@/databases/connectDb';
import mongoose from 'mongoose';

const setupTestDB = () => {
  beforeAll(async () => {
    await startConnection();
  });

  beforeEach(async () => {
    await Promise.all(
      Object.values(mongoose.connection.collections).map(async collection => collection.deleteMany({})),
    );
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });
};

export default setupTestDB;
