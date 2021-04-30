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
    if (businessUser) {
      console.log(businessUser)
      //setCompany(details.details.company.name);
    }
    // const result = await axios.get("http://localhost:4000/business/user");
    // console.log(result.data.details.company.name);
    // setCompany(result.data.details.company.name);
  }, [businessUser]);

  useEffect(async () => {
    const result = await axios(
      'http://localhost:4000/business/alljobs', // hardcoded as Amazon
      {page: 1}
    );

    setJobs(result.data)
  }, []);


  return (
    <div>
      <Header company={"amazon"}/>
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