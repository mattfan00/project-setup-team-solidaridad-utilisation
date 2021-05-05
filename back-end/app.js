const express = require("express")
const app = express()
const cors = require("cors")
const multer = require("multer")
const morgan = require("morgan")
const mongoose = require("mongoose")
require('dotenv').config({ path: "../.env"})

app.use(morgan("dev"))
app.use(express.static("public"))

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => {
  console.log("database connected")
})

// A section to import all of the routes in ./routes
const applicantUser = require("./routes/applicantUser")
const getBusinessJobs = require("./routes/getBusinessJobs")
const getJobDetails = require("./routes/businessRoutes/getJobDetails")
const getApplicationDetails = require("./routes/businessRoutes/getApplicationDetails")
const getCompanyDetails = require("./routes/businessRoutes/getCompanyDetails")
const getImageFromFile = require("./routes/getImageFromFile")
const postBusinessProfile = require("./routes/postBusinessProfile")

const getBusinessUser = require("./routes/businessRoutes/getBusinessUser")

const exampleRoute = require("./routes/exampleRoute")

// This uses one of the imported routes
app.use(applicantUser)
app.use(getJobDetails)
app.use(getApplicationDetails)
app.use(getCompanyDetails)
app.use(getImageFromFile)
app.use(getBusinessJobs)
app.use(postBusinessProfile)

app.use(exampleRoute)

// app.use(changeJobStatus)
app.use(getBusinessUser)


app.get("/", (req, res) => {
  res.json({
    message: "hey"
  })
})

module.exports = app
