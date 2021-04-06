import React from "react"
import CommonElements from "./CommonElements"

const Common = ({handleNextButton, handleBackButton, updateCommon}) => {
  return (
    <div className="checkBoxForm">
        <CommonElements 
          handleNextButton={handleNextButton} 
          handleBackButton={handleBackButton}
          updateCommon={updateCommon}
        ></CommonElements>
    </div>
  )
}

export default Common