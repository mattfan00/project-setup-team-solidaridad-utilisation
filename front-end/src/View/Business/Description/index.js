import React from "react"
import DescriptionForm from "./DescriptionForm"
import Header from '../../../Components/BusinessHeader/Header'

const Description = () => {
  return (
    <div className="checkBoxForm">
        <Header></Header>
        {/* Insert Progress Bar Component */}
        <h2>Insert Progress-Tracker (Job Description)</h2>
        <DescriptionForm></DescriptionForm>
    </div>
  )
}

export default Description