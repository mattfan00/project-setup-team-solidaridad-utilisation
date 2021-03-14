import React from "react"
import ApplicationForm from "../../../Components/ApplicationForm"
import ApplicantHeader from "../../../Components/ApplicantHeader/ApplicantHeader"
import JobDescription from "../../../Components/JobDescription/JobDescription"
import "../index.css"

const Application = () => {
  return (
    <>
      <div className="header">
        {/* Application Header */}
        {<ApplicantHeader />}
      </div>

      <div className="main">
        <div className="application">
          {/* Put job description here */}
          <JobDescription />
          {/* Form for application */}
          <ApplicationForm />

        </div>
      </div>
    </>
  )
}

export default Application