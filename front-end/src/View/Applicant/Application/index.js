import React, { useState, useEffect }  from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import ApplicationForm from "../../../Components/ApplicationForm"
import ApplicantHeader from "../../../Components/ApplicantHeader"
import JobDescription from "../../../Components/JobDescription/JobDescription"
import "../index.css"

import {
  message,
  Spin
} from "antd"

import moment from "moment"

const Application = () => {
  const [user, setUser] = useState(null)
  const [application, setApplication] = useState(null)
  const [loading, setLoading] = useState(true)

  const { job } = useParams()

  useEffect(async () => {
    console.log("retrieve application details")

    const application = await axios.get(`https://6050e7e35346090017670c11.mockapi.io/applications/${job}`)
    setLoading(false)

    console.log("retrieve current user")
    const currentUser = {
      email: "test@test.com",
      details: {
        name: {
          firstName: "Matthew",
          lastName: "Fan",
        },
        // email: "myprofessionalemail@test.com",
        address: {
          address: "123 Testing St",
          city: "New York",
          state: "NY",
          country: "US",
          postalCode: "10000"
        },
        workExperience: [
          {
            title: "Software Engineer",
            employer: "Copply",
            startDate: moment("Mar 2021", "MMM YYYY"),
            endDate: undefined,
            currentJob: true,
            description: "i love this job"
          }
        ],
        education: [
          {
            school: "New York University",
            level: "Bachelors",
            startDate: moment("Aug 2018", "MMM YYYY"),
            endDate: moment("May 2021", "MMM YYYY"),
            major: "Computer Science"
          }
        ]
      }
    }

    if (application.data) {
      setApplication(application.data)
    }

    if (currentUser) {
      setUser(currentUser)
      message.success("Autofilled applicable fields")
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
            <JobDescription />

            {/* Form for application */}
            <ApplicationForm
              user={user}
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