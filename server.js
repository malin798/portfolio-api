import express from 'express'
import data from './data/data.json'

const path = require('path');
const port = process.env.PORT || 8080
const app = express()
const cors = require('cors')
process.env.PWD = process.cwd();

const whitelist = ['http://localhost:3000', 'https://malins-portfolio.netlify.app']

const corsOptions = {
  origin: function (origin, callback) {

    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.get("/", (req, res) => {
  res.json(data)
})
app.use('/media', express.static(path.join(process.env.PWD, 'data/media')))

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})