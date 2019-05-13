import express from 'express';

const app = express();

//create a server to listen on a given port
const port = process.env.PORT || 9090
app.listen(port, () => {
  console.log('The app started on port', port);
})

