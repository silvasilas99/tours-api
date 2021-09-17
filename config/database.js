const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const databaseConnect = () => {
  return mongoose
    .connect(
      process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log(`Database connected successfully!`))
    .catch((err) => console.log(err.message));
};

module.exports = databaseConnect;
