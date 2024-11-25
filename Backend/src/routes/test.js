const express = require("express")
const db = require("../config/db")

const router = express.Router()

router.get("/test-db", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()")
    res.json({ message: "Database connected successfully", time: result.rows[0].now })
  } catch (err) {
    res.status(500).json({ error: "Database connection failed", details: err.message })
  }
})

module.exports = router
