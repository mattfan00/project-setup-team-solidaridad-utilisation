import { useHistory } from "react-router-dom"
import JobList from "../../../Components/Dashboard/JobList"
import {Button} from "antd"

import './index.css'
//import stylesheet

const Dashboard = () => {
  const history = useHistory()
  
  //dummydata for testing purposes
  const jobs = [{
    title: "jobtitle",
    desc: "desc1",
    appCount: 12
  },
  { 
    title: "otherjob", 
    desc: "lorem ipsum",
    appCount: 643
  }
  ]

  return (
    <div>
      <div className = 'header'>
        <div className = 'welcomeText'>
          Company Dashboard
        </div> 
      </div>

      <div className = "newJob">
        <Button 
          type="primary"
          onClick={() => history.push("/business/listing/new")}
        >
          Create New Job
        </Button>
      </div>
      
      <div className = "joblist">
        <JobList jobs={jobs}></JobList>
      </div>
      
    </div>
  )
}

export default Dashboard