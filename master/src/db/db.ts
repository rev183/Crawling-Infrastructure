import mongoose from 'mongoose';

/**
 * Connect to mongodb.
 *
 */
export function mongoConnect() {
  return new Promise((resolve, reject) => {
    let options = {
      connectTimeoutMS: 15000, // Give up initial connection after 10 seconds
      // reconnectTries: 3,
      // reconnectInterval: 1000
    };

    const MONGO_URL = process.env.MONGODB_CONNECTION_URL || 'mongodb://admin:password@127.0.0.1:27017/serp?authSource=admin';

    console.log(`Connecting to mongodb: ${MONGO_URL}`);

    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO_URL, options).then(function(success) {
      console.log('MongoDB is connected');
      resolve('MongoDB is connected');
    }).catch(function(err) {
      console.error(`Could not connect to ${MONGO_URL}: ${err.toString()}`);
      process.exit(1);
    });
  });
}