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
exports.getTransactions = async (req, res) => {
  const userId = req.userId;

  try {
    const result = await db.query(
      "SELECT * FROM transactions WHERE user_id=$1 ORDER BY date DESC",
      [userId]
    );

    res.json(result.rows);

  } catch (err) {
    res.status(500).json(err);
  }
};

/* ==============================
   CREATE TRANSACTION
============================== */

exports.createTransaction = async (req, res) => {
  const userId = req.userId;
  const { person, type, amount, date, note, due_date } = req.body;

  try {
    await db.query(
      "INSERT INTO transactions (person,type,amount,date,note,due_date,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7)",
      [person, type, amount, date, note, due_date, userId]
    );

    res.json({ message: "Transaction added successfully" });

  } catch (err) {
    res.status(500).json(err);
  }
};


/* ==============================
   UPDATE TRANSACTION
============================== */
exports.updateTransaction = async (req, res) => {
  const userId = req.userId;
  const id = req.params.id;

  const { person, type, amount, date, note, due_date } = req.body;

  try {
    await db.query(
      "UPDATE transactions SET person=$1, type=$2, amount=$3, date=$4, note=$5, due_date=$6 WHERE id=$7 AND user_id=$8",
      [person, type, amount, date, note, due_date, id, userId]
    );

    res.json({ message: "Transaction updated successfully" });

  } catch (err) {
    res.status(500).json(err);
  }
};

/* ==============================
   DELETE TRANSACTION
============================== */
exports.deleteTransaction = async (req, res) => {
  const userId = req.userId;
  const id = req.params.id;

  try {
    await db.query(
      "DELETE FROM transactions WHERE id=$1 AND user_id=$2",
      [id, userId]
    );

    res.json({ message: "Transaction deleted successfully" });

  } catch (err) {
    res.status(500).json(err);
  }
};

/* ==============================
   GET NOTIFICATIONS
============================== */
exports.getNotifications = async (req, res) => {
  const userId = req.userId;

  try {
    const result = await db.query(
      `SELECT person, amount, due_date
       FROM transactions
       WHERE user_id=$1 AND due_date <= CURRENT_DATE
       ORDER BY due_date ASC`,
      [userId]
    );

    res.json(result.rows);

  } catch (err) {
    res.status(500).json(err);
  }
};