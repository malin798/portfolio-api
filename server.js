import express from 'express'
import data from './data/data.json'

const path = require('path');

const app = express()

app.get("/", (req, res) => {
  res.json(data)
})

app.get("/media/:image", (req, res) => {
  const image = req.params.image
  res.sendFile(image, { root: path.join(__dirname, './data/media') });
})

app.listen(3000)