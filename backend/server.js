// const express = require("express")
// const cors = require("cors")

// const transactionRoutes = require("./routes/transactions")
// const authRoutes = require("./routes/auth")

// const app = express()

// app.use(cors())
// app.use(express.json())

// app.use("/api/transactions", transactionRoutes)
// app.use("/api/auth", authRoutes)

// app.get("/", (req,res)=>{
// res.send("Server running")
// })

// app.listen(5000,()=>{
// console.log("Server running on port 5000")
// })

// require("./reminderService")

require("dotenv").config()

const express = require("express")
const cors = require("cors")

const transactionRoutes = require("./routes/transactions")
const authRoutes = require("./routes/auth")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/transactions", transactionRoutes)
app.use("/api/auth", authRoutes)

app.get("/", (req,res)=>{
res.send("Server running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})