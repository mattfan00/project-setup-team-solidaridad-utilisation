import React from 'react'
import JobView from '../../../Components/Dashboard/JobView'
import './index.css'
import Header from '../../../Components/BusinessHeader/Header'

const ApplicationView = (props) => {
    return (
        <div>
            <Header company={'Amazon'}/>
            <div className = "jobList">
                <JobView job={props.location.aboutProps}/>
            </div>
        </div>
    )
}

export default ApplicationView