// const db = require("../db")

// /* ==============================
//    GET USER TRANSACTIONS
// ============================== */

// exports.getTransactions = (req, res) => {

// const userId = req.userId

// db.query(
// "SELECT * FROM transactions WHERE user_id=? ORDER BY date DESC",
// [userId],
// (err, result) => {

// if(err) return res.status(500).json(err)

// res.json(result)

// })

// }


// /* ==============================
//    CREATE TRANSACTION
// ============================== */

// exports.createTransaction = (req, res) => {

// const userId = req.userId

// const { person, type, amount, date, note } = req.body

// db.query(
// "INSERT INTO transactions (person,type,amount,date,note,user_id) VALUES (?,?,?,?,?,?)",
// [person, type, amount, date, note, userId],
// (err, result) => {

// if(err) return res.status(500).json(err)

// res.json({ message: "Transaction added successfully" })

// })

// }


// /* ==============================
//    UPDATE TRANSACTION
// ============================== */

// exports.updateTransaction = (req, res) => {

// const userId = req.userId
// const id = req.params.id

// const { person, type, amount, date, note } = req.body

// db.query(
// "UPDATE transactions SET person=?, type=?, amount=?, date=?, note=? WHERE id=? AND user_id=?",
// [person, type, amount, date, note, id, userId],
// (err, result) => {

// if(err) return res.status(500).json(err)

// res.json({ message: "Transaction updated successfully" })

// })

// }


// /* ==============================
//    DELETE TRANSACTION
// ============================== */

// exports.deleteTransaction = (req, res) => {

// const userId = req.userId
// const id = req.params.id

// db.query(
// "DELETE FROM transactions WHERE id=? AND user_id=?",
// [id, userId],
// (err, result) => {

// if(err) return res.status(500).json(err)

// res.json({ message: "Transaction deleted successfully" })

// })

// }

// exports.getNotifications = (req, res) => {

// const userId = req.userId

// db.query(
// `SELECT person, amount, due_date
// FROM transactions
// WHERE user_id=? AND due_date <= CURDATE()
// ORDER BY due_date ASC`,
// [userId],
// (err,result)=>{

// if(err) return res.status(500).json(err)

// res.json(result)

// })

// }

const db = require("../db")

/* ==============================
   GET USER TRANSACTIONS
============================== */

exports.getTransactions = (req, res) => {

const userId = req.userId

db.query(
"SELECT * FROM transactions WHERE user_id=? ORDER BY date DESC",
[userId],
(err, result) => {

if(err) return res.status(500).json(err)

res.json(result)

})

}


/* ==============================
   CREATE TRANSACTION
============================== */

exports.createTransaction = (req, res) => {

const userId = req.userId

const { person, type, amount, date, note, due_date } = req.body

db.query(
"INSERT INTO transactions (person,type,amount,date,note,due_date,user_id) VALUES (?,?,?,?,?,?,?)",
[person, type, amount, date, note, due_date, userId],
(err, result) => {

if(err) return res.status(500).json(err)

res.json({ message: "Transaction added successfully" })

})

}


/* ==============================
   UPDATE TRANSACTION
============================== */

exports.updateTransaction = (req, res) => {

const userId = req.userId
const id = req.params.id

const { person, type, amount, date, note, due_date } = req.body

db.query(
"UPDATE transactions SET person=?, type=?, amount=?, date=?, note=?, due_date=? WHERE id=? AND user_id=?",
[person, type, amount, date, note, due_date, id, userId],
(err, result) => {

if(err) return res.status(500).json(err)

res.json({ message: "Transaction updated successfully" })

})

}


/* ==============================
   DELETE TRANSACTION
============================== */

exports.deleteTransaction = (req, res) => {

const userId = req.userId
const id = req.params.id

db.query(
"DELETE FROM transactions WHERE id=? AND user_id=?",
[id, userId],
(err, result) => {

if(err) return res.status(500).json(err)

res.json({ message: "Transaction deleted successfully" })

})

}


/* ==============================
   GET NOTIFICATIONS
============================== */

exports.getNotifications = (req, res) => {

const userId = req.userId

db.query(
`SELECT person, amount, due_date
FROM transactions
WHERE user_id=? AND due_date <= CURDATE()
ORDER BY due_date ASC`,
[userId],
(err, result) => {

if(err) return res.status(500).json(err)

res.json(result)

})

}