const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT} = require("./config/config");

const app = express();

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
    .then(() => console.log("MONGO DB CONNECTED"))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send("<h2>Hello There!!!</h2>")
})

const port = process.env.PORT || 3002

app.listen(port, () => console.log(`listening on port ${port}`));

