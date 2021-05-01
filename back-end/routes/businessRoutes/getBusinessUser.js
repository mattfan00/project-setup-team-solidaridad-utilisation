const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const businessAuth = require("../../middleware/businessAuth")
const requireBusinessAuth = require("../../middleware/requireBusinessAuth")

const BusinessUser = require("../../models/businessUserSchema")
const Business = require("../../models/business")

const SALT_ROUNDS = 10

// Gets the current business user logged in
router.get("/business/user", businessAuth, requireBusinessAuth, async (req, res) => {
  console.log(req.businessUser)

  const foundUser = await BusinessUser.findById(req.businessUser.id)

  res.json(foundUser)
})

router.post("/business/user/register", async (req, res) => {
  const { email, password, company } = req.body
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)

  const existingUser = await BusinessUser.findOne({ email })
  if (existingUser) {
    return res.status(400).json("Email already in use")
  }

  const existingCompany = await Business.findOne({ name: company })
  if (existingCompany) {
    return res.status(400).json("Company name already in use")
  }

  const newBusiness = await Business.create({
    name: company
  })

  const newUser = await BusinessUser.create({
    email,
    password: hashedPassword,
    company: newBusiness.id
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

router.post("/business/user/login", async (req, res) => {
  const { email, password } = req.body

  console.log(email, password)

  const existingUser = await BusinessUser.findOne({ email })
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