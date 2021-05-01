const requireBusinessAuth = (req, res, next) => {
  if (!req.businessUser) {
    return res.status(401).json("Not authenticated")
  }

  next()
}

module.exports = requireBusinessAuth