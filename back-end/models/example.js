const mongoose = require("mongoose")

let ExampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
})

module.exports = mongoose.model("Example", ExampleSchema)