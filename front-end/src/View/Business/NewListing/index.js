import React, { useState } from "react"
import Header from '../../../Components/BusinessHeader/Header'
import { Steps } from "antd"
import JobDescription from "./Description/index"
import CommonElements from "./CommonElements"
import ExtraQuestions from "./ExtraQuestions/ExtraQuestions"
import Preview from "./Preview/Preview"

const { Step } = Steps;


const NewListing = () => {



  const [current, setCurrent] = useState(1);

  const handleNextButton = () => {
    console.log("hello");
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
      content: <ExtraQuestions handleNextButton={handleNextButton} handleBackButton={handleBackButton}/>
    },
    {
      title: 'Preview',
      content: <Preview />
    },
  ];
  
  return (
    <>
      <Header></Header>
      <Steps current={current}>
        {steps.map(item => (
          <Step title = {item.title}/>
        ))}
      </Steps>
      <div> {steps[current].content}</div>
    </>
  )
}

export default NewListing