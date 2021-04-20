const mongoose = require("mongoose")

let ExampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note"
    }
  ]
})

module.exports = mongoose.model("Example", ExampleSchema)