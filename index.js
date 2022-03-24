const express = require("express")
const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:shieldeye@postgres:5432/wesport_data')
const app = express()

db.one('SELECT $1 AS value', 123)
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })

app.use(express.json())

app.listen(2400, () => {console.log("Server started: 2400")})