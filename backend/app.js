const express = require('express');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use(contactRoutes);
app.get('/', (req,res) => {
res.send('Bem vindo ao meu servidor!');
});

const conn = require('./db/conn.js');
const Contact = require('./models/Contact.js');
conn();

const PORT = process.env.PORT || 3000

app.listen(3001, '0.0.0.0', () => {
    console.log('Server on');
});

