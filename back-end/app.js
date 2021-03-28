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
const getJobDetails = require("./routes/businessRoutes/getJobDetails")
const getApplicationDetails = require("./routes/businessRoutes/getApplicationDetails")

// This uses one of the imported routes
app.use(getApplicantUser)
app.use(getJobDetails)
app.use(getApplicationDetails)


app.get("/", (req, res) => {
  res.json({
    message: "hey"
  })
})



module.exports = app
