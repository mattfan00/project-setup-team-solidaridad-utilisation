import React from "react"
import DescriptionForm from "./DescriptionForm"

const Description = ({handleNextButton}) => {
  return (
    <div className="checkBoxForm">
        <DescriptionForm handleNextButton={handleNextButton}></DescriptionForm>
    </div>
  )
}

export default Description