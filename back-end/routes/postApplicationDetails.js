const express = require("express")
const router = express.Router()
const multer = require("multer")
/*
// enable pdf uploads saved to disk in a directory named 'public/resumes'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/resumes")
    },
    filename: function (req, file, cb) {
      cb(
        null,
        `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
      )
    },
  })
const upload = multer({storage: storage});  //initilialize multer

// route for HTTP POST requests for /resume-upload
// files need to change according to the real html applications parts(haven't found it yet)
router.post("/resume-upload", upload.array("file", 1), (req, res, next) => {
    // check whether anything was uploaded
    if (req.files) {
      // success! send data back to the client
      const data = {
        status: "success",
        message: "uploaded",
        files: req.files,
      }
      res.json(data) // send respose
    }
  })
*/
//simulate the database for now

const applications = []

router.post("/newapplication",(req, res)=>{
  console.log(req.body.jobId)
  console.log(req.body.newApplication);

  //post the newApplication to the database
  applications.push(req.body.newApplication);

  res.json(req.body.newApplication)
})




module.exports = router