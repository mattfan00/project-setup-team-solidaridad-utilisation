const express = require("express")
const router = express.Router()

const Business = require("../../models/business")

router.get("/company/:id", async (req, res) => {
    const foundBusiness = await Business.findOne({ _id: req.params.id })

    res.json(foundBusiness)
});

module.exports = router