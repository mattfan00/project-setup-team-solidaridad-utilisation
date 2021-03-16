import React, { useState, useEffect }  from "react"
import ApplicationForm from "../../../Components/ApplicationForm"
import AppHeader from "../../../Components/ApplicationForm/ApplicantHeader"
import "../index.css"

import {
  message
} from "antd"

import moment from "moment"

const Application = () => {
  const [user, setUser] = useState(null)
  const [application, setApplication] = useState(null)

  useEffect(() => {
    console.log("retrieve application details")
    const application = {
      fields: ["name", "email", "address", "workExperience"],
      extraQuestions: [
        {
          id: "6050cf3b2b1075721d44f214",
          label: "Why do you want to join?",
          required: true,
          type: "textarea"
        },
        {
          id: "6050d3ad8b47286b9091e134",
          label: "What can you bring to the job?",
          required: true,
          type: "textarea"
        }
      ]
    }

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
            startDate: moment("Aug 2018", "MMM YYYY"),
            endDate: moment("May 2021", "MMM YYYY"),
            major: "Computer Science"
          }
        ]
      }
    }

    if (application) {
      setApplication(application)
    }

    if (currentUser) {
      setUser(currentUser)
      message.success("Autofilled applicable fields")
    }
  }, [])

  return (
    <>
      <div className="header">
        {<AppHeader />}
      </div>

      <div className="main">
        <div className="application">
          {/* Put job description here */}

          {/* Form for application */}
          <ApplicationForm
            user={user}
            fields={application ? application.fields : []}
            extraQuestions={application ? application.extraQuestions : []}
          />
        </div>
      </div>
    </>
  )
}

export default Application