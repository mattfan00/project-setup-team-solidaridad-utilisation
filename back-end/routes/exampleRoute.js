const express = require("express")
const router = express.Router()

const Example = require("../models/example")
const Note = require("../models/note")

/*
  DESCRIPTION
    Gets a list of all of the examples stored in the database
*/
router.get("/example", async (req, res) => {
  const foundExamples = await Example.find().populate("notes")

  res.json(foundExamples)
})

/*
  DESCRIPTION
    Gets one individual example based on the id passed in the route
*/
router.get("/example/:id", async (req, res) => {
  // This is a more general version, you can put any field in place of "_id", such as "name"
  // If you didn't put "populate", there would be an array of ids. The "populate" method populates the ids with the corresponding note
  const foundExamples = await Example.findOne({"_id": req.params.id}).populate("notes")

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

/*
  DESCRIPTION
    Creates a new note by using the contents in body and the id param in the URL
  BODY
    text: Number
*/
router.post("/example/:id/note/new", async (req, res) => {
  // create the new note
  const newNote = await Note.create(req.body)

  // get the example you want to add the note to
  const foundExample = await Example.findOne({"_id": req.params.id})

  // add the note's id to the example and save it
  foundExample.notes.push(newNote.id)
  await foundExample.save()

  res.json(newNote)
})

/*
  DESCRIPTION
    Gets a specifc note depending on the id param in the URL
*/
router.get("/note/:id", async (req, res) => {
  const foundNote = await Note.findOne({"_id": req.params.id})

  res.json(foundNote)
})

module.exports = router