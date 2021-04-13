const mongoose = require("mongoose")

let NoteSchema = new mongoose.Schema({
  text: String,
})

module.exports = mongoose.model("Note", NoteSchema)