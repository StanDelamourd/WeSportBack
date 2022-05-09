require('dotenv').config();
const express = require('express');
const app = express()
var cors = require('cors');
var config = require('./test.json') 
const port = 3000

function init() {
  app.use(cors());
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
}
app.get('/', (req, res) => {
  
  res.json({data: config, err:null})
})



init();