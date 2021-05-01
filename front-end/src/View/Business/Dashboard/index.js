import React, {useEffect, useState, useContext} from 'react'
import { AuthContext } from "../../../Context/AuthContext"
import { useHistory } from "react-router-dom"
import JobList from "../../../Components/Dashboard/JobList"
import {Button} from "antd"
import Header from '../../../Components/BusinessHeader/Header'
import axios from "axios"


import './index.css'

const Dashboard = () => {
  const history = useHistory()

  const [jobs, setJobs] = useState([])
  const { businessUser } = useContext(AuthContext)
  const [company, setCompany] = useState(null);

  useEffect(async () => {
    // const result = await axios.get("http://localhost:4000/business/user");
    // console.log(result.data.details.company.name);
    // setCompany(result.data.details.company.name);
  }, [businessUser]);

  useEffect(async () => {
    const result = await axios(
      'http://localhost:4000/business/alljobs'
    );

    setJobs(result.data)
  }, []);


  return (
    <div>
      <Header company={businessUser.company}/>
      <div className="buttons">
        <Button
          type="primary"
          onClick={() => history.push("/business/newlisting/description")}
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