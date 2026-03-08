const express = require("express")
const router = express.Router()

const verifyToken = require("../middleware/auth")

const {
getTransactions,
createTransaction,
updateTransaction,
deleteTransaction,
getNotifications
} = require("../controllers/transactionController")


router.get("/", verifyToken, getTransactions)

router.post("/", verifyToken, createTransaction)

router.put("/:id", verifyToken, updateTransaction)

router.delete("/:id", verifyToken, deleteTransaction)

/* NOTIFICATION ROUTE */
router.get("/notifications", verifyToken, getNotifications)

module.exports = router