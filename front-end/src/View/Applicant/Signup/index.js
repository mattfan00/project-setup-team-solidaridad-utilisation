import React from "react"
import ApplicantHeader from "../../../Components/ApplicantHeader"
import CompanyLogo from "../../../Components/CompanyImageHeader"

import "../index.css"

const Signin = () => {
  return (
    <>
      <div className="header">
        {<ApplicantHeader/>}
      </div>

      <div className="applicant-main">
        <div className="application">
          <CompanyLogo/>
        </div>
      </div>
    </>
  )
}

export default Signin