import React from "react"
import CommonElements from "./CommonElements"
import Header from '../../../Components/BusinessHeader/Header'

const NewListing = () => {
  return (
    <div className="checkBoxForm">
      <Header></Header>
      {/* Insert Progress Bar Component */}
      <h3>Insert Progress-Tracker (Common Elements)</h3>
      <CommonElements></CommonElements>
    </div>
  )
}

export default NewListing