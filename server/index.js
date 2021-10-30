const express = require('express')
const path = require('path')

const app = express()
const port = 3000

//things to do 
// 1 get routes to get client caseID - caseStatus  ex .  arr of objs
// 2 get mongo or mysql to save the data 
// 3 make it better 
var tempData = [
  {caseID: 1336, caseStatus: "Active"},
  {caseID: 2020, caseStatus: "Pending"},
  {caseID: 3001, caseStatus: "Resolved"},
  {caseID:10, caseStatus: "Resolved"}
]
//this is middleware(this will convert json into javascript)
app.use(express.json())
//this is middleware (this is creating a path directory to the public folder) 
app.use('/', express.static(path.join(__dirname, '../public')))

app.get('/cases', (req, res) =>{
  res.send(tempData)
})

app.get('/clients', (req, res) => {
  res.send('This is going to be a list of clients')
})
//from line number one number twenty nine you are building the whole menu,on line number 29 you are opening the restaurant.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


