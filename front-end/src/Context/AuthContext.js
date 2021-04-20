import React, { useState, useEffect, createContext } from "react"
import axios from "axios"

const AuthContext = createContext()

const AuthProvider = (props) => {
  const [applicantUser, setApplicantUser] = useState(null)
  const [applicantToken, setApplicantToken] = useState(null)
  const [businessUser, setBusinessUser] = useState(null)

  useEffect(async () => {
    const localApplicantToken = localStorage.getItem("applicantToken")

    // if there is already a token stored in localStorage, used that to log the user in automatically
    if (localApplicantToken) {
      setApplicantToken(localApplicantToken)

      try {
        const result = await axios.get("http://localhost:4000/applicant/user", {
          headers: {
            "Authorization": `Bearer ${localApplicantToken}`
          }
        })
        console.log("get user in AuthContext")
        setApplicantUser(result.data)
      } catch(err) {}
    }

  }, [])

  return (
    <AuthContext.Provider
      value={{
        applicantUser,
        setApplicantUser,
        applicantToken,
        setApplicantToken,

        businessUser,
        setBusinessUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }