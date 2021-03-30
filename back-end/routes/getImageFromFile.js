const express = require("express")
const router = express.Router()
const path = require('path');

// retrieves image 
router.get("/images/:logo", (req, res) => {
    const logo = req.params.logo
    res.sendFile('images/' + logo)
})

module.exports = router