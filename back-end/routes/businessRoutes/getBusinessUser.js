const express = require("express");
const router = express.Router();

// Gets the current business user logged in
router.get("/business/user", (req, res) => {
  // hardcoded for now
  const user = {
    "id": "1",
    "createdAt": "2021-04-01T21:23:51.802Z",
    "email": "test@test.com",
    "details": {
      "name": {
        "firstName": "Jo",
        "lastName": "Ko"
      },
      "company": {
          "name": "Amazon",
          "employeeID": "idk2",
          "description": "i guess it's alright here"
      }
    }
  }

  res.json(user);
})

module.exports = router