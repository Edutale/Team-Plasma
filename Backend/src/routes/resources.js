const express = require("express");
const router = express.Router();
const {
    getAllResources,
    getResourceDetails
} = require("../javascript/resources/resourcesGet");
const {
    addNewResource
} = require("../javascript/resources/resourcesPost");
const {
    updateResource
} = require("../javascript/resources/resourcesPut");
const {
    deleteResource
} = require("../javascript/resources/resourcesDelete");

// Get all resources from the database, will make some sort of filtering down the line
router.get("/", async(req, res)=>{
    try{
        const resources = await getAllResources()
        res.json(resources)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Get the details of a specified resource
router.get("/:id", async(req, res)=>{
    try{
        const resource = await getResourceDetails(req.params.id)
        if(!resource){
            return res.status(404).json({error: "Resource not found"})
        }
        res.json(resource)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Add new resource
router.post("/", async(req, res)=>{
    try{
        const {resourceName, resourceLink, resourceDescription, resourceType} = req.body
        // Validating required fields
        if(!resourceName || !resourceLink || !resourceDescription || !resourceType){
            return res.status(400).json({error: "Missing required fields"})
        }

        // Validating resource type
        const validTypes = ["Video", "Article", "Tutorial", "Exercise", "Documentation"]
        if(!validTypes.includes(resourceType)){
            return res.status(400).json({error: "Invalid resource type"})
        }
        
        const resourceId = await addNewResource(resourceName, resourceLink, resourceDescription, resourceType)
        res.status(201).json({
            message: "Resource added successfully",
            resourceId: resourceId
        })
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Update resource
router.put("/:id", async(req, res)=>{
    try{
        const {resourceName, resourceLink, resourceDescription, resourceType} = req.body
        // Validating that at least one field is filled
        if(!resourceName && !resourceLink && !resourceDescription && !resourceType){
            return res.status(400).json({error: "At least one field must be provided!"})
        }

        // Validate type if type is filled
        if(resourceType){
            const validTypes = ["Video", "Article", "Tutorial", "Exercise", "Documentation"];
            if(!validTypes.includes(resourceType)) {
                return res.status(400).json({error: "Invalid resource type"});
            }
        }
        
        await updateResource(req.params.id, resourceName || null, resourceLink || null, resourceDescription || null, resourceType || null);
        res.status(200).json({message: "Resource updated successfully"});
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

// Delete resource
router.delete("/:id", async(req, res)=>{
    try{
        await deleteResource(req.params.id)
        res.status(200).json({message: "Resource deleted successfully"})
    } catch(err){
        res.status(500).json({error: err.message})
    }
})


module.exports = router