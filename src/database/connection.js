import mongoose from 'mongoose';
import logger from '../utils/logger';
import seedDatabase from './seeds';

const connectToDatabase = async () => {
  try {
    const {
      MONGO_USERNAME,
      MONGO_PASSWORD,
      MONGO_HOST,
      MONGO_PORT,
      MONGO_DATABASE,
      MONGO_AUTH_SOURCE
    } = process.env;

    const mongoOptions = {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 1000,
    };

    const withCredentials = MONGO_USERNAME && MONGO_PASSWORD;

    const mongoCredentials = withCredentials && {
      user: MONGO_USERNAME,
      pass: MONGO_PASSWORD,
    };

    await mongoose.connect(
      `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}${MONGO_AUTH_SOURCE}`,
      { ...mongoCredentials, ...mongoOptions },
    );
  } catch (error) {
    logger.error(error);
  }
};

export default { connectToDatabase, seedDatabase };
