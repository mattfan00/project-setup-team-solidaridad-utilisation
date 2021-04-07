import React from "react"
import ExtraQuestions from "./ExtraQuestions"

const Extra = ({handleBackButton, updateExtra, extra}) => {
  return (
    <div className="checkBoxForm">
        <ExtraQuestions 
          handleBackButton={handleBackButton}
          updateExtra={updateExtra}
          extra={extra}
        ></ExtraQuestions>
    </div>
  )
}

export default Extra