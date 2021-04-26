const express = require("express")
const router = express.Router()
const multer = require("multer")
const aws = require('aws-sdk')
const multerS3 = require('multer-s3')
const business = require("../models/business")
const Business = require('../models/business')

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: process.env.AWS_BUCKET_REGION
});

const s3 = new aws.S3();
/*
// enable logo uploads saved to disk in a directory named 'public/resumes'
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
*/

const upload = multer({
  storage: multerS3({
      s3: s3,
      bucket: process.env.AWS_BUCKET_NAME,
      key: function (req, file, cb) {
          console.log(file);
          cb(null, file.originalname); //use Date.now() for unique file keys
      }
  })
});

//simulate the database for now
const companies = []

router.post("/updateprofile", upload.single("logo"), (req, res)=>{
  companies.push({
    description: req.body.description,
    industry: req.body.industry,
    logo: req.file.location,
  })
  res.json("Successfully updated"); 
//get one
router.get("/updateprofle/:id", getBusiness, (req, res) => {
    res.send(res.business)
})

//create one
router.post("/updateprofile", async (req, res)=>{
    console.log(req.body.businessProfile)
    const business = new Business({
      //name: name when created, 
      description: "", 
      introduction: ""
    })

    try{
      const newBusiness = await business.save()
      //successfully create a project
      res.status(201).json(newBusiness)
    } catch(err){
      res.status(400)
    }
})

//update one
router.patch('/:id', getBusiness, async (req, res) => {
  if(req.body.businessProfile.description != null){
    res.business.description = req.body.description

  }
  if(req.body.businessProfile.introduction != null){
    res.business.introduction = req.body.industry
  }
  try{
    const updatedBusiness = await res.business.save()
    res.json(updatedBusiness)
  }
  catch(err){
    res.status(400)
  }
})

//delete one
router.delete('/updatedprofile/:id', getBusiness, async (req, res) => {
  try {
    await res.subscriber.remove()
    res.json({message:'deleted subscriber'})
  } catch(err){
    res.status(500).json({message:err.message})
  }
})


async function getBusiness(req, res, next){
  try{
    business = await Business.findById(req.params.id)
    if(business == null){
      return res.status(404).json({message:'cannot find business'})
    }
  }
  catch(err){
    return status(500).json({message: err.message})
  }
  res.business = business
  next()
}



module.exports = router