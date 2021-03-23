const express = require("express")
const app = express()
const multer = require("multer")
const morgan = require("morgan")

app.use(morgan("dev"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// A section to import all of the routes in ./routes
const getUser = require("./routes/getUser")

// This uses one of the imported routes
app.use(getUser)

app.get("/", (req, res) => {
  res.json({
    message: "hey"
  })
})



module.exports = app
