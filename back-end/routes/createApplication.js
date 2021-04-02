const express = require("express")
const router = express.Router()

//handle pdf file
const multer = require('multer')
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



const bodyParser = require("body-parser")
router.use(bodyParser.json()) 
router.use(bodyParser.urlencoded({ extended: true })) //initialize bodyParser


// route for HTTP POST requests for /resume-upload
// files need to change according to the real html applications parts(haven't found it yet)
app.post("/resume-upload", upload.array("file", 1), (req, res, next) => {
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


router.post("/create-app",(req, res)=>{
    
})




module.exports = router