const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT} = require("./config/config");
const postRouter = require("./routes/postRoutes");
const authRouter = require("./routes/userRoutes");

const app = express();

const connectWithRetry = () => {
  mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`)
      .then(() => console.log("MONGO DB CONNECTED"))
      .catch((err) => {
        console.log(err)
        setTimeout(() => connectWithRetry(), 5000);
      });
}

connectWithRetry();
app.use(express.json());
app.get('/', (req, res) => {
  res.send("<h2>Hello There!!!</h2>")
})

app.use("/api/v1/posts", postRouter);

app.use("/api/v1/users", authRouter);

const port = process.env.PORT || 3002

app.listen(port, () => console.log(`listening on port ${port}`));

