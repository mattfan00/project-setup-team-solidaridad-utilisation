const express = require("express")
const app = express()
const cors = require("cors")
const multer = require("multer")
const morgan = require("morgan")

app.use(morgan("dev"))
app.use(express.static("public"))


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// A section to import all of the routes in ./routes
const getApplicantUser = require("./routes/getApplicantUser")
const getBusinessJobs = require("./routes/getBusinessJobs")
const getJobDetails = require("./routes/businessRoutes/getJobDetails")
const getApplicationDetails = require("./routes/businessRoutes/getApplicationDetails")
const getImageFromFile = require("./routes/getImageFromFile")
<<<<<<< HEAD
const postApplicationDetails = require("./routes/postApplicationDetails")
=======
// const changeJobStatus = require("./routes/businessRoutes/changeJobStatus")
>>>>>>> 5def48326fe9df600969a13a0b0b75501e22e7c5

// This uses one of the imported routes
app.use(getApplicantUser)
app.use(getJobDetails)
app.use(getApplicationDetails)
app.use(getImageFromFile)
app.use(getBusinessJobs)
<<<<<<< HEAD
app.use(postApplicationDetails)

=======
// app.use(changeJobStatus)
>>>>>>> 5def48326fe9df600969a13a0b0b75501e22e7c5


app.get("/", (req, res) => {
  res.json({
    message: "hey"
  })
})



module.exports = app
