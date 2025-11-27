import mongoose from 'mongoose';

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'RESTURANT'
    })
    .then(() => {
      console.log('Connected to the Database is successfull');
    })
    .catch((err) => {
      console.log(`your error is ${err}`);
    });
};
