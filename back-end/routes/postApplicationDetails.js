const express = require("express")
const router = express.Router()
const multer = require("multer")

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

let current_applicants = []

router.post("/post-app",(req, res)=>{
  const applicant = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    education: req.body.education,
    gradYear: req.body.gradYear,
    edDescription: req.body.edDescription,
    work: [
      {
        id: req.body.work[0].id,
        company: req.body.work[0].company,
        role: req.body.work[0].role,
        description: req.body.work[0].description,
        year: req.body.work[0].year
      },
      {
        company: req.body.work[1].company,
        year: req.body.work[1].year,
        role: req.body.work[1].role,
        description: req.body.work[1].description,
      }
    ],

    /*
    projects: [
      {
        id: "1",
        title: "bandwidth",
        description: "Corporate",
        year: "2020"
      }
    ],
    responses: [
      {
        commonQ: [
          {
            question: "Email",
            answer: "apple@oranges.com"
          },
          {
            question: "Veteran",
            answer: "No"
          }
        ],
        extraQ: [
          {
            question: "Which bear is best?",
            answer: "black bear"
          },
          {
            question: "Why are you interested in working with us?",
            answer: "banana"
          }
        ]
      }
    ]
    */
  }
  current_applicants.push(applicant); 
  res.json(applicant)
})




module.exports = router