import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import JobList from "../../../Components/Dashboard/JobList"
import {Button} from "antd"
import Header from '../../../Components/BusinessHeader/Header'
import axios from "axios"

import './index.css'

const Dashboard = () => {
  const history = useHistory()
  
  const [jobs, setJobs] = useState([])

  useEffect(async () => {
    const result = await axios(
      'http://localhost:4000/business/alljobs', // hardcoded as Amazon
      {page: 1}
    );
    console.log(result.data)
    setJobs(result.data)
  }, []);

  return (
    <div>
      <Header company={'Amazon'}/>
      <div className="buttons">
        <Button 
          type="primary"
          onClick={() => history.push("/business/newlisting/description")}
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