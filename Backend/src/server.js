const express = require("express")
require("dotenv").config({path: "../.env"})
const cors = require("cors")
const studentRoutes = require("./routes/students")
const questRoutes = require("./routes/quests")
const careerRoutes = require("./routes/careers")
const inventoryRoutes = require("./routes/inventory")
const skillRoutes = require("./routes/skills")
const resourceRoutes = require("./routes/resources")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use("/api/students", studentRoutes)
app.use("/api/quests", questRoutes)
app.use("/api/careers", careerRoutes)
app.use("/api/inventory", inventoryRoutes)
app.use("/api/skills", skillRoutes)
app.use("/api/resources", resourceRoutes)

app.get("/", (req, res) => {
    res.send("Edutale Backend is running")
})

app.put("/", (req, res) => {
    res.send("Edutale Backend is running")
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})