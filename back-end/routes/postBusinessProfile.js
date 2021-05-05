const express = require("express")
const router = express.Router()
const multer = require("multer")
const Business = require('../models/business')
const fs = require("fs")

// enable logo uploads saved to disk in a directory named 'public/resumes'
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const dir = "public/images"

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
      }

      cb(null, dir)
    },
    filename: function (req, file, cb) {
      cb(
        null,
        `${Date.now()}-${file.originalname}`
      )
    },
  })
const upload = multer({storage: storage});  //initilialize multer

//get one
router.get("/updateprofle/:id", getBusiness, (req, res) => {
    res.send(res.business)
})


//create one
router.post("/updateprofile", async (req, res)=>{
    const business = new Business({
      //name: name when created,
      description: "",
      industry: ""
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
router.patch('/updateProfile/:id', getBusiness, upload.single("logo"), async (req, res) => {
  if(req.body.description != null){
    res.business.description = req.body.description

  }
  if(req.body.industry != null){
    res.business.industry = req.body.industry
  }

  if(req.file && req.file.filename != null) {
    res.business.logo = `/images/${req.file.filename}`
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
  try {
    const business = await Business.findById(req.params.id)
    if(business == null){
      return res.status(404).json({message:'cannot find business'})
    }
    res.business = business
    next()
  } catch(err){
    return status(500).json({message: err.message})
  }
}



module.exports = router