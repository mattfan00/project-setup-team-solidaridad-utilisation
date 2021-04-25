const jwt = require("jsonwebtoken")
const BusinessUser = require("../models/businessUserSchema")

const businessAuth = async (req, res, next) => {
  const authHeader = req.header("Authorization")
  if (!authHeader || authHeader.split(" ").length != 2 || authHeader.split(" ")[0] != "Bearer") {
    return res.status(401).json("Invalid authorization header")
  }

  const token = authHeader.split(" ")[1]
  try {
    console.log(token)
    const payload = jwt.verify(token, process.env.JWT_KEY)
    req.businessUser = await BusinessUser.findById(payload.id)

    next()
  } catch(err) {
    return res.status(401).json("Invalid token")
  }
}

module.exports = businessAuth