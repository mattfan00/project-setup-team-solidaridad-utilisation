import React from "react"
import CompanyLogo from "../../../Components/CompanyImageHeader"
import ApplicantHeader from "../../../Components/ApplicantHeader"
import { Result } from "antd"

const ApplicationSuccess = () => {
  return (
    <div>
       <div className="header">
        {/* Application Header */}
        {<ApplicantHeader />}
      </div>

      <CompanyLogo/>
    <Result
      status="success"
      title="You’ve successfully submitted your application!"
    />
    </div>
  )
}

export default ApplicationSuccess