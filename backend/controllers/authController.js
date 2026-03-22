const db = require("../db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

/* ==============================
   REGISTER USER
============================== */

exports.register = async (req, res) => {

const { name, email, password, phone } = req.body

try {

const hashedPassword = await bcrypt.hash(password, 10)

db.query(
"INSERT INTO users (name,email,password,phone) VALUES (?,?,?,?)",
[name, email, hashedPassword, phone],
(err, result) => {

if (err) {
console.log("REGISTER ERROR:", err)
return res.status(500).json({ message: "Registration failed" })
}

res.json({ message: "User registered successfully" })

})

} catch (error) {

console.log(error)
res.status(500).json({ message: "Server error" })

}

}



/* ==============================
   LOGIN USER
============================== */

exports.login = (req, res) => {

const { email, password } = req.body

db.query(
"SELECT * FROM users WHERE email=?",
[email],
async (err, result) => {

if (err) {
console.log(err)
return res.status(500).json({ message: "Database error" })
}

if (result.length === 0) {
return res.status(400).json({ message: "User not found" })
}

const user = result[0]

try {

const validPassword = await bcrypt.compare(password, user.password)

if (!validPassword) {
return res.status(401).json({ message: "Invalid password" })
}

const token = jwt.sign(
{ id: user.id },
"secretkey",
{ expiresIn: "1d" }
)

res.json({
token,
user: {
id: user.id,
name: user.name,
email: user.email,
phone: user.phone
}
})

} catch (error) {

console.log(error)
return res.status(500).json({ message: "Login error" })

}

})

}



/* ==============================
   UPDATE PHONE NUMBER
============================== */
exports.updatePhone = (req, res) => {

const userId = req.userId
const { phone } = req.body

db.query(
"UPDATE users SET phone=? WHERE id=?",
[phone, userId],
(err, result) => {

if (err) {
console.log(err)
return res.status(500).json({ message: "Failed to update phone" })
}

res.json({ message: "Phone number updated successfully" })

})

}