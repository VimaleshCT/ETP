const mongoose = require("mongoose");

const db = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { db };
