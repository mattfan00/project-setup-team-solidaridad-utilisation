import React from "react"
import CompanyLogo from "../../../Components/CompanyImageHeader"
import ApplicantHeader from "../../../Components/ApplicantHeader"
import { Result, Card } from "antd"
import "../index.css"

const ApplicationSuccess = () => {
  return (
    <div>
       <div className="header">
        {/* Application Header */}
        {<ApplicantHeader />}
      </div>

      <div className="applicant-main">
        <div className="application">
          <CompanyLogo/>
          <Card>
            <Result
              status="success"
              title="You’ve successfully submitted your application!"
            />
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ApplicationSuccess