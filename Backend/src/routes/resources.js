const express = require('express')
const router = express.Router()
const {
    getAllResources
} = require("../javascript/resources/resourcesGet")

// Get all resources from the database, will make some sort of filtering down the line
router.get("/", async(req, res)=>{
    try{
        const resources = await getAllResources()
        res.json(resources)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

module.exports = router