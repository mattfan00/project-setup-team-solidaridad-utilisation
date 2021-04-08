import React from "react"
import ExtraQuestions from "./ExtraQuestions"

const Extra = ({handleBackButton, updateExtra, extra, check}) => {
  return (
    <div className="checkBoxForm">
        <ExtraQuestions 
          handleBackButton={handleBackButton}
          updateExtra={updateExtra}
          extra={extra}
          check={check}
        ></ExtraQuestions>
    </div>
  )
}

export default Extra