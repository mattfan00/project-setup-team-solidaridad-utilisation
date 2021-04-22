import React, { useState } from "react"
import { Link } from "react-router-dom"
import Header from '../../../Components/BusinessHeader/Header'
import { message, Steps, Modal, Result } from "antd"
import JobDescription from "./Description/index"
import CommonElements from "./CommonElements/index"
import ExtraQuestions from "./ExtraQuestions/index"

import axios from "axios"

import TextArea from "antd/lib/input/TextArea"
// import Preview from "./Preview/Preview"

const { Step } = Steps;


const NewListing = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [description, setDescription] = useState({
    jobTitle: "Software Engineer",
    jobDescription: "",
    jobType: ["full-time"],
    jobLocation: "NYC",
    desiredSkills: "Java"
  });
  const [common, setCommon] = useState([
    "primaryPhone", "workEx", "hispanicLatino", "workAuth"
  ]);
  const [extra, setExtra] = useState([
    {
      label: "Why do you want to join?",
      type: "multiline"
    }
  ]);
  const [createdJob, setCreatedJob] = useState(null)

  const updateDescription = (newDescription) => {
    setDescription(newDescription);
  }

  const updateCommon = (newCommon) => {
    setCommon(newCommon);
  }

  const updateExtra = (newExtra) => {
    setExtra(newExtra);
  }

  const [current, setCurrent] = useState(0);

  const handleNextButton = () => {
    setCurrent(current + 1);
  }

  const handleBackButton = () => {
    setCurrent(current - 1);
  }

  const check = async () => {
    try {
        let newJob= {
          company: "amazon",
          jobTitle: description.jobTitle,
          type: description.jobType,
          location: description.jobLocation,
          status: "Open",
          applicantCount: 0,
          fields: common,
          description: description.jobDescription,
          skills: description.desiredSkills,
          extraQuestions: extra
        }
        newJob = await axios.post("http://localhost:4000/jobs/new",
          newJob
        )

        setCreatedJob(newJob.data)
        showModal()
    }

      catch (errorInfo) {
      console.log('Failed:', errorInfo);
      message.error("Please fill out all of the required fields");
    }
  }

  const showModal = () => {
    setIsModalVisible(true);
  }
  const handleOk = () => {
    setIsModalVisible(false);
  }

  const finalCheck = () => {
    check();
  }


  const steps = [
    {
      title: 'Job Description',
      content: (
        <JobDescription
          handleNextButton={handleNextButton}
          updateDescription={updateDescription}
          description={description}
        />
      )
    },
    {
      title: 'Common Elements',
      content: (
        <CommonElements
          handleNextButton={handleNextButton}
          handleBackButton={handleBackButton}
          updateCommon={updateCommon}
          common={common}
        />
      )
    },
    {
      title: 'Add Extra Questions',
      content: (
        <ExtraQuestions
          handleBackButton={handleBackButton}
          updateExtra={updateExtra}
          extra={extra}
          check={finalCheck}
        />
      )
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

      <Modal visible = {isModalVisible} onOk={handleOk}>
        <Result
          status="success"
          title="Your job is live!"
          subTitle={<Link to={`/application/${createdJob?._id}`}>View your job</Link>}
        />
      </Modal>
    </>
  )
}

export default NewListing