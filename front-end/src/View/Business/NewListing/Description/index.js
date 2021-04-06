import React from "react"
import DescriptionForm from "./DescriptionForm"

const Description = ({handleNextButton, updateDescription, description}) => {
  return (
    <div className="checkBoxForm">
        <DescriptionForm 
          handleNextButton={handleNextButton}
          updateDescription={updateDescription}
          description={description}
        ></DescriptionForm>
    </div>
  )
}

export default Description