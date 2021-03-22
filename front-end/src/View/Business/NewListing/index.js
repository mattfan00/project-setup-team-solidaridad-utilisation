import React, { useState } from "react"
import Header from '../../../Components/BusinessHeader/Header'
import { Steps } from "antd"
import JobDescription from "./Description/index"
import CommonElements from "./CommonElements/index"
import ExtraQuestions from "./ExtraQuestions/index"
// import Preview from "./Preview/Preview"

const { Step } = Steps;


const NewListing = () => {



  const [current, setCurrent] = useState(0);

  const handleNextButton = () => {
    setCurrent(current + 1);
  }

  const handleBackButton = () => {
    setCurrent(current - 1);
  }

  
  const steps = [
    {
      title: 'Job Description',
      content: (<JobDescription handleNextButton={handleNextButton} />)
    },
    {
      title: 'Common Elements',
      content: (<CommonElements handleNextButton={handleNextButton} handleBackButton={handleBackButton}/>)
    },
    {
      title: 'Add Extra Questions',
      content: (<ExtraQuestions handleBackButton={handleBackButton}/>)
    },
    // {
    //   title: 'Preview',
    //   content: <Preview />
    // },
  ];
  
  return (
    <>
      <Header></Header>
      
      <Steps className="steps" current={current}>
        {steps.map(item => (
          <Step title = {item.title}/>
        ))}
      </Steps>
      <div> {steps[current].content}</div>
    </>
  )
}

export default NewListing