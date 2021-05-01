const requireApplicantAuth = (req, res, next) => {
  if (!req.applicantUser) {
    return res.status(401).json("Not authenticated")
  }

  next()
}

module.exports = requireApplicantAuth