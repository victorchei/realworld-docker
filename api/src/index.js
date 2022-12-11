'use strict';

const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const MONGO_URL = process.env.MONGO_URL;

const Cat = mongoose.model('Cat', { name: String, age: Number, time: Date });

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World )');
});

app.get('/cats', async (req, res) => {
  try {
    const cat = new Cat({ name: "Viktor", age: 18, time: new Date() })
    await cat.save();
    const cats = await Cat.find();
    res.json(cats);
  } catch(e) {
    res.send(e.message);
  };
 
});

mongoose.connect(MONGO_URL)
  .then(()=> {
    app.listen(PORT, () => {
      console.log(`Running on http://${HOST}:${PORT}   =)))`);
    });
  })
  .catch((e)=>{
    console.log(e.message);
  });