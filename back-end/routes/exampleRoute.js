const express = require("express")
const router = express.Router()

const Example = require("../models/example")

/*
  DESCRIPTION
    Gets a list of all of the examples stored in the database
*/
router.get("/example", async (req, res) => {
  const foundExamples = await Example.find()

  res.json(foundExamples)
})

/*
  DESCRIPTION
    Gets one individual example based on the id passed in the route
*/
router.get("/example/:id", async (req, res) => {
  // This is a more general version, you can put any field in place of "_id", such as "name"
  const foundExamples = await Example.findOne({"_id": req.params.id})

  // This is a more specific version, you can only search by the id
  // const foundExamples = await Example.findById(req.params.id)

  res.json(foundExamples)
})

/*
  DESCRIPTION
    Creates a new example by using the body
  BODY
    name: String,
    age: Number,
*/
router.post("/example/new", async (req, res) => {
  const createdExample = await Example.create(req.body)

  res.json(createdExample)
})

/*
  DESCRIPTION
    Updates an existing example, based on the id passed in the route, by using the contents in body
  BODY
    name: String,
    age: Number,
*/
router.put("/example/:id", async (req, res) => {
  // You can update a record by supplying the field you want to query by and the new contents you want to put in it
  // The {new:true} is an option being passed in that basically says: return the new version of the document we are updating instead of the old one
  const updatedExample = await Example.findOneAndUpdate({"_id": req.params.id}, req.body, {new: true})

  // You can also update a record by finding it first, changing the variable you assigned, and then using .save()
  /*
  let updatedExample = await Example.findOne({"_id": req.params.id})
  updatedExample.name = req.body.name
  updatedExample.age = req.body.age
  await updatedExample.save()
  */

  res.json(updatedExample)
})

module.exports = router