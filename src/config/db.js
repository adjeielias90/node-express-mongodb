import mongoose from 'mongoose';
import config from './config';

const db = {};

db.initDB = () => new Promise((resolve, reject) => {
  mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })
    .then((data) => {
      console.log('Database Intialized');
      resolve(data);
    })
    .catch((err) => {
      console.log('An error occured while connecting to the database', err);
      reject(err);
    });
});


export default db;
