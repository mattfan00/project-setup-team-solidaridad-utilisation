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
const getApplicationDetails = require("./routes/businessRoutes/getApplicationDetails")
<<<<<<< HEAD
const getCompanyDetails = require("./routes/businessRoutes/getCompanyDetails")
=======
const getImageFromFile = require("./routes/getImageFromFile")
>>>>>>> 951b86f40c33619a3de9f71e7ead935966395200

// This uses one of the imported routes
app.use(getApplicantUser)
app.use(getApplicationDetails)
<<<<<<< HEAD
app.use(getCompanyDetails)
=======
app.use(getImageFromFile)

>>>>>>> 951b86f40c33619a3de9f71e7ead935966395200

app.get("/", (req, res) => {
  res.json({
    message: "hey"
  })
})



module.exports = app
