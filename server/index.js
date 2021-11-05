const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

//things to do
// 1 get routes to get client caseID - caseStatus  ex .  arr of objs
// 2 get mongo or mysql to save the data
// 3 make it better
var caseNumber = 0
var tempData = [
  {
    caseID: 623423,
    caseStatus: "Pending",
    priority: "Low",
    assignedTo: "Pancho",
    caseType: "Repair",
    dueDate: "One Month",
  },
  {
    caseID: 36326,
    caseStatus: "Resolved",
    priority: "Medium",
    assignedTo: "Pete",
    caseType: "Maintenance",
    dueDate: "One Week",
  },  {
    caseID: 54354,
    caseStatus: "Resolved",
    priority: "Low",
    assignedTo: "Tom",
    caseType: "IT",
    dueDate: "One Month",
  },  {
    caseID: 135436,
    caseStatus: "Active",
    priority: "Low",
    assignedTo: "Pete",
    caseType: "Maintenance",
    dueDate: "One Month",
  },  {
    caseID: 13326,
    caseStatus: "Pending",
    priority: "Medium",
    assignedTo: "Tom",
    caseType: "Repair",
    dueDate: "Two Monts",
  }
];
//this is middleware(this will convert json into javascript)
app.use(express.json());
//this is middleware (this is creating a path directory to the public folder)
app.use("/", express.static(path.join(__dirname, "../public")));

app.get("/cases", (req, res) => {
  res.send(tempData);
});

app.get("/clients", (req, res) => {
  res.send("This is going to be a list of clients");
});
app.post("/addCase",(req, res)=>{
  console.log("The waiter received",req.body)
  req.body["caseID"]= caseNumber +=1
  // var obj={
  //   caseID: 999999,
  //   caseStatus: "Active",
  //   priority: "High",
  //   assignedTo: "Joe",
  //   caseType: "Repair",
  //   dueDate: "Two Months"
  // }
  tempData.push(req.body)
  res.send("You posted to the DB")
});
//from line number one number twenty nine you are building the whole menu,on line number 29 you are opening the restaurant.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
