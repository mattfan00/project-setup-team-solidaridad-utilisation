import React from "react"
import ApplicationForm from "../../../Components/ApplicationForm"
import AppHeader from "../../../Components/ApplicationForm/ApplicantHeader"
import "../index.css"

const Application = () => {
  return (
    <>
      <div className="header">
        {<AppHeader />}
      </div>

      <div className="main">
        <div className="application">
          {/* Put job description here */}

          {/* Form for application */}
          <ApplicationForm />

        </div>
      </div>
    </>
  )
}

export default Application