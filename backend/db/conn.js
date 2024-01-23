const mongoose = require("mongoose");
require("dotenv").config( {path: "db/variables.env"} );

const key = process.env.MONGO_KEY;

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://pietromizael:${key}naPT@cluster0.kvkvahc.mongodb.net`
    );
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
}

module.exports = connect;
