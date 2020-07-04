const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.get('/', (req, res) => {
  res.send("DipakGhuge")
})
const port = process.env.port || 5000;
app.listen(port,()=>{
  console.log(`App Running on port ${port}`);
})