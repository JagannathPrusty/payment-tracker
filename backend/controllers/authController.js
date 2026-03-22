const db = require("../db")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

/* ==============================
   REGISTER USER
============================== */
exports.register = async (req, res) => {
  const { name, email, password, phone } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (name,email,password,phone) VALUES ($1,$2,$3,$4)",
      [name, email, hashedPassword, phone]
    );

    res.json({ message: "User registered successfully" });

  } catch (err) {
    console.log("REGISTER ERROR:", err);

    // 👇 HANDLE DUPLICATE EMAIL
    if (err.code === "23505") {
      return res.status(400).json({ message: "Email already exists" });
    }

    res.status(500).json({ message: "Registration failed" });
  }
};

/* ==============================
   LOGIN USER
============================== */

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = result.rows[0];

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user.id },
      "secretkey",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      },
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Database error" });
  }
};

/* ==============================
   UPDATE PHONE NUMBER
============================== */
exports.updatePhone = async (req, res) => {
  const userId = req.userId;
  const { phone } = req.body;

  try {
    await db.query(
      "UPDATE users SET phone=$1 WHERE id=$2",
      [phone, userId]
    );

    res.json({ message: "Phone number updated successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to update phone" });
  }
};