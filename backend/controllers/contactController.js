const Contact = require("../models/Contact");

exports.createContact = async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(409).json({ message: "Erro ao enviar sua mensagem" });
    }
};