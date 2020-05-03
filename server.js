import express from 'express'
import data from './data/data.json'

const cors = require('cors')
const path = require('path');
const port = process.env.PORT || 8080
const app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.json(data)
})

app.get("/media/:image", (req, res) => {
  const image = req.params.image
  res.sendFile(image, { root: path.join(__dirname, './data/media') });
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})