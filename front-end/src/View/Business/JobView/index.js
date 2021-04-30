import React, { useContext } from 'react'
import { AuthContext } from "../../../Context/AuthContext"
import JobView from '../../../Components/Dashboard/JobView'
import './index.css'
import Header from '../../../Components/BusinessHeader/Header'

const ApplicationView = (props) => {
    const { businessUser } = useContext(AuthContext)

    return (
        <div>
            <Header company={businessUser.company}/>
            <div className = "jobList">
                <JobView />
            </div>
        </div>
    )
}

export default ApplicationView