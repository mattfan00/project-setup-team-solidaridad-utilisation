import { useHistory } from "react-router-dom"
import JobList from "../../../Components/Dashboard/JobList"
import {Button} from "antd"
import Header from '../../../Components/BusinessHeader/Header'

import './index.css'

const Dashboard = () => {
  const history = useHistory()
  
  //dummydata for testing purposes
  const jobs = [{
    title: "jobtitle",
    desc: "desc1",
    appCount: 12,
    status: "Open",
    applicants: [
      
    ]
  },
  { 
    title: "otherjob", 
    desc: "lorem ipsum",
    appCount: 643,
    status: "Open"
  }
  ]

  return (
    <div>
      <Header/>
      <div className="buttons">
        <Button 
          type="primary"
          onClick={() => history.push("/business/listing/new")}
          href="#"
        >
          Create New Job
        </Button>
      </div>
      
      
      <div className="joblist">
        <JobList jobs={jobs}></JobList>
      </div>
      
    </div>
  )
}

export default Dashboard