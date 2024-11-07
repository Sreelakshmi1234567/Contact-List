const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactlistModel = require('./new/Contact');
const port = 3000;

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/ContactList', 
  console.log('mongodb connected succesfully')
  
);


app.post('/contact', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = await contactlistModel.create({ name, email, phone });
    res.status(201).json(newUser); 
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
});


app.get('/getcontact', async (req, res) => {
  try {
    const users = await contactlistModel.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message }); 
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
