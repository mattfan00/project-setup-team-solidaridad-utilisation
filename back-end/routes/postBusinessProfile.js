const express = require("express")
const router = express.Router()
const multer = require("multer")

// enable pdf uploads saved to disk in a directory named 'public/resumes'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images")
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
router.post("/logo-upload", upload.array("logo", 1), (req, res, next) => {
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

let companies = []

router.post("/post-app",(req, res)=>{
    const current_company = 
    {
          "description": body.user.description, 
          "introduction": body.user.introduction,
          "logo": "user.logo"
    }
      
    companies.push(current_company)
    res.json(applicant)
})




module.exports = router