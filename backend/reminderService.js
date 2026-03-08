const cron = require("node-cron")
const db = require("./db")

cron.schedule("0 9 * * *",()=>{

console.log("Checking reminders...")

db.query(
"SELECT * FROM transactions WHERE DATE(due_date)=CURDATE()",
(err,result)=>{

if(err){
console.log(err)
return
}

result.forEach(tx=>{

console.log(
`Reminder: ${tx.person} should return ₹${tx.amount}`
)

})

})

})