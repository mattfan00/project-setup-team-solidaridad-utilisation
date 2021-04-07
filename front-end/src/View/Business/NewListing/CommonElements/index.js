import React from "react"
import CommonElements from "./CommonElements"

const Common = ({handleNextButton, handleBackButton, updateCommon, common}) => {
  return (
    <div className="checkBoxForm">
        <CommonElements 
          handleNextButton={handleNextButton} 
          handleBackButton={handleBackButton}
          updateCommon={updateCommon}
          common={common}
        ></CommonElements>
    </div>
  )
}

export default Common