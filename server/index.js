const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/clients', (req, res) => {
  res.send('This is going to be a list of clients')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


