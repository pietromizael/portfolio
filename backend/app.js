const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(contactRoutes);

const conn = require('./db/conn.js');
const Contact = require('./models/Contact.js');
conn();

app.listen(3000, () => {
    console.log('Server on');
});

