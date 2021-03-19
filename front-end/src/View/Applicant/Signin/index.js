import React from "react"
import CompanyLogo from "../../../Components/CompanyImageHeader"
import ApplicantHeader from "../../../Components/ApplicantHeader"
import ApplicantSignIn from "../../../Components/ApplicantSignIn"

import "../index.css"

const Signin = () => {
  return (
    <>

      <div className="header">
        {/* Application Header */}
        {<ApplicantHeader />}
      </div>

      <div className="main">
        <div className="application">
          <CompanyLogo/>
          <ApplicantSignIn/>
          this is the sign in page
        </div>
      </div>
    </>
  )
}

export default Signin