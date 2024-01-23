const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://pietromizael:kVDOHc5rIDB5naPT@cluster0.kvkvahc.mongodb.net')
        console.log("Conectado ao MongoDB")
    } catch (error) {
        console.log("Error connecting to MongoDB");
    }
}

module.exports = connect;