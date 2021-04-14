const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const applicantAuth = require("../middleware/applicantAuth")

const ApplicantUser = require("../models/applicantUserSchema")

const SALT_ROUNDS = 10

// Gets the current applicant user logged in
router.get("/applicant/user", applicantAuth, async (req, res) => {
  console.log(req.applicantUser)

  const foundUser = await ApplicantUser.findById(req.applicantUser.id)

  res.json(foundUser)
})

router.post("/applicant/user/register", async (req, res) => {
  const { email, password } = req.body
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

  const existingUser = await ApplicantUser.findOne({ email })
  if (existingUser) {
    return res.status(400).json("Email already in use")
  }

  const newUser = await ApplicantUser.create({
    email,
    password: hashedPassword
  })


  const newJwt = jwt.sign({
    id: newUser.id,
    email: newUser.email
  }, process.env.JWT_KEY)

  res.json({
    user: newUser,
    token: newJwt
  })
})

router.post("/applicant/user/login", async (req, res) => {
  const { email, password } = req.body

  const existingUser = await ApplicantUser.findOne({ email })
  if (!existingUser) {
    return res.status(401).json("Invalid credentials")
  }

  const correctPassword = await bcrypt.compare(password, existingUser.password)
  if (!correctPassword) {
    return res.status(401).json("Invalid credentials")
  }

  const newJwt = jwt.sign({
    id: existingUser.id,
    email: existingUser.email
  }, process.env.JWT_KEY)

  res.json({
    user: existingUser,
    token: newJwt
  })
})

module.exports = router
