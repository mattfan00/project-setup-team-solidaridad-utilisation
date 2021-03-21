import React, { useState, useEffect, createContext } from "react"
import axios from "axios"

const AuthContext = createContext()

const AuthProvider = (props) => {
  const [user, setUser] = useState(null)

  // useEffect(async () => {
  //   console.log("get user in AuthContext")
  //   const result = await axios.get("https://6050e7e35346090017670c11.mockapi.io/user/1")
  //   setUser(result.data)
  // }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }