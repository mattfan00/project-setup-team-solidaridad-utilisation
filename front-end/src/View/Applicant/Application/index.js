import React, { useState, useEffect, useContext }  from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { AuthContext } from "../../../Context/AuthContext"

import ApplicationForm from "../../../Components/ApplicationForm"
import ApplicantHeader from "../../../Components/ApplicantHeader"
import JobDescription from "../../../Components/JobDescription/JobDescription"
import CompanyLogo from "../../../Components/CompanyImageHeader"
import ExpressApply from "../../../Components/ExpressButton"

import "../index.css"

import {
  message,
  Spin
} from "antd"

const Application = () => {
  const [application, setApplication] = useState(null)
  const [loading, setLoading] = useState(true)

  const { job } = useParams()

  useEffect(async () => {
    // get the application details
    const result = await axios.get(`https://6050e7e35346090017670c11.mockapi.io/applications/${job}`)
    setLoading(false)

    if (result.data) {
      setApplication(result.data)
    }
  }, [])

  return (
    <>
      <div className="header">
        {/* Application Header */}
        {<ApplicantHeader />}
      </div>

      <div className="main">
        <div className="application">
          {!loading ?
          <>
            {/* Put job description here */}
            <ExpressApply />
            <JobDescription />

            {/* Form for application */}
            <ApplicationForm
              fields={application ? application.fields : []}
              extraQuestions={application ? application.extraQuestions : []}
            />
          </>
          :
          <div className="loading">
            <Spin />
          </div>
          }
        </div>
      </div>
    </>
  )
}

export default Application