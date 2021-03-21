import React from 'react'
import JobView from '../../../Components/Dashboard/JobView'
import './index.css'
import Header from '../../../Components/BusinessHeader/Header'

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