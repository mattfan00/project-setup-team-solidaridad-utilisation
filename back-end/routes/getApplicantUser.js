const express = require("express")
const router = express.Router()

// Gets the current applicant user logged in
router.get("/applicant/user", (req, res) => {
  res.json({
    email: "hello@gmail.com",
    details: {}
  })
})

module.exports = router
