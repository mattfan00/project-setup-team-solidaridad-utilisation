import React, { useState, useEffect, createContext } from "react"
import axios from "axios"

const AuthContext = createContext()

const AuthProvider = (props) => {
  const [applicantUser, setApplicantUser] = useState(null)
  const [applicantToken, setApplicantToken] = useState(null)
  const [businessUser, setBusinessUser] = useState(null)
  const [businessToken, setBusinessToken] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)

  useEffect(async () => {
    const localApplicantToken = localStorage.getItem("applicantToken")
    const localBusinessToken = localStorage.getItem('businessToken');

    // if there is already a token stored in localStorage, used that to log the user in automatically
    if (localApplicantToken) {
      setApplicantToken(localApplicantToken)

      try {
        const result = await axios.get("http://localhost:4000/applicant/user", {
          headers: {
            "Authorization": `Bearer ${localApplicantToken}`
          }
        })
        console.log("get applicant user in AuthContext")
        setApplicantUser(result.data)
      } catch(err) {}
    }

    if (localBusinessToken) {
      setBusinessToken(localBusinessToken)

      try {
        const result = await axios.get("http://localhost:4000/business/user", {
          headers: {
            "Authorization": `Bearer ${localBusinessToken}`
          }
        })
        console.log("get business user in AuthContext")
        setBusinessUser(result.data)
      } catch(err) {}
    }

    setAuthLoading(false)
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
        businessToken,
        setBusinessToken,

        authLoading
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }