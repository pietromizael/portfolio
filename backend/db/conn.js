const mongoose = require("mongoose");
require("dotenv").config({ path: "db/variables.env" });

async function connect() {
  try {
    await mongoose.connect(
      `mongodb+srv://root:root@cluster0.kvkvahc.mongodb.net/?retryWrites=true&w=majority`,
    );
    console.log("Conectado ao MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
}

module.exports = connect;
