import { useHistory } from "react-router-dom"
import JobList from "../../../Components/Dashboard/JobList"
import {Button} from "antd"

import './index.css'

const Dashboard = () => {
  const history = useHistory()
  
  //dummydata for testing purposes
  const jobs = [{
    title: "jobtitle",
    desc: "desc1",
    appCount: 12,
    status: "Open"
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
      <div className='header'>
        <div className='welcomeText'>
          $Company$
        </div>
        <div className="profile">
          <Button>
            Sign out
          </Button>
          $userName$
        </div>  
      </div>

      <div className="buttons">
        <div>
          <Button
            type="primary"
            onClick={() => history.push("/business/profile")}
            href="#"
          >
            Edit Company Profile
        </Button>
        </div>
        
      </div>
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