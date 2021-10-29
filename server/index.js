const express = require('express')
const path = require('path')

const app = express()
const port = 3000

//things to do 
// 1 get routes to get client caseID - caseStatus  ex .  arr of objs
// 2 get mongo or mysql to save the data 
// 3 make it better 
var tempData = [
  {caseID: 1336, caseStatus: "Pending"},
  {caseID: 2020, caseStatus: "Cooking"},
  {caseID: 3001, caseStatus: "Done"}
]
app.use(express.json())
app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/cases', (req, res) =>{
  res.send(tempData)
})

app.get('/clients', (req, res) => {
  res.send('This is going to be a list of clients')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


