import React from 'react'
import JobView from '../../../Components/Dashboard/JobView'
import './index.css'
import Header from '../../../Components/BusinessHeader/Header'
//import businessHeader

const ApplicationView = (props) => {
    return (
        <div>
            <Header/>
            <div className = "jobList">
                <JobView job={props.job}/>
            </div>       
        </div>
    )
}

export default ApplicationView