const express = require("express")
const app = express()
const cors = require("cors")
const multer = require("multer")
const morgan = require("morgan")

app.use(morgan("dev"))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// A section to import all of the routes in ./routes
const getApplicantUser = require("./routes/getApplicantUser")

// This uses one of the imported routes
app.use(getApplicantUser)

app.get("/", (req, res) => {
  res.json({
    message: "hey"
  })
})



module.exports = app
