import React, { useContext } from 'react'
import { AuthContext } from "../../../Context/AuthContext"
import Header from '../../../Components/BusinessHeader/Header'
import Candidate from '../../../Components/BusinessApplicant/Candidate'

const Applicant = (props) => {
    const { businessUser } = useContext(AuthContext)

    return (
        <div>
            <Header company={businessUser.company}/>
            <Candidate details={props.location.aboutProps}/>
        </div>
    )
}

export default Applicant