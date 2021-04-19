const express = require("express")
const router = express.Router()
const multer = require("multer")
const business = require("../models/business")
const Business = require('../models/business')

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

//get one
router.get("/updateprofle/:id", getBusiness, (req, res) => {
    res.send(res.business)
})

//create one
router.post("/updateprofile",(req, res)=>{
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
    res.business.description = req.body.businessProfile.description

  }
  if(req.body.businessProfile.introduction != null){
    res.business.introduction = req.body.businessProfile.introduction
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