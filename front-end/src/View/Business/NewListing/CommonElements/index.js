import React from "react"
import CommonElements from "./CommonElements"

const Common = ({handleNextButton, handleBackButton}) => {
  return (
    <div className="checkBoxForm">
        <CommonElements handleNextButton={handleNextButton} handleBackButton={handleBackButton}></CommonElements>
    </div>
  )
}

export default Common