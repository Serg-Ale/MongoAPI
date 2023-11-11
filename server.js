require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRouter = require("./routes/TaskRoute");
const errorMiddleware = require("./middleware/errorMiddleware");

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/tasks", taskRouter);
app.use(errorMiddleware);

// Connect to MongoDB and then start listen
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
