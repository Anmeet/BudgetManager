import dotenv from 'dotenv';
dotenv.config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` });

const config = {
  PORT: process.env.PORT || 3000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGOURI: process.env.MONGOURI,
  MONGODB_USERNAME: process.env.MONGODB_USERNAME,
  MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  HAS_CREDENTIALS: process.env.HAS_CREDENTIALS === 'true',
  ORIGIN: process.env.ORIGIN || 'http://localhost:3000',
  LOG_FORMAT: process.env.LOG_FORMAT,
  LOG_DIR: process.env.LOG_DIR,
};

export default config;
