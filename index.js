const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://rancid:password@mongo:27017/?authSource=admin')
    .then(() => console.log("MONGO DB CONNECTED"))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send("<h2>Hello There!!!</h2>")
})

const port = process.env.PORT || 3002

app.listen(port, () => console.log(`listening on port ${port}`));

