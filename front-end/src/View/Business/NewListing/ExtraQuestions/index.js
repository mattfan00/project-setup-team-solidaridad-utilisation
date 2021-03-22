import React from "react"
import ExtraQuestions from "./ExtraQuestions"

const Extra = ({handleBackButton}) => {
  return (
    <div className="checkBoxForm">
        <ExtraQuestions handleBackButton={handleBackButton}></ExtraQuestions>
    </div>
  )
}

export default Extra