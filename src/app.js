import dotenv from 'dotenv';
import express from 'express';
import db from './config/db';

dotenv.config();
const app = express();
db.initDB();
// create a server to listen on a given port
const port = process.env.PORT || 9090;

app.listen(port, () => {
  console.log('The app started on port', port);
});
