import React from 'react'
import Header from '../../../Components/BusinessHeader/Header'
import Candidate from '../../../Components/BusinessApplicant/Candidate'

const Applicant = (props) => {
    return (
        <div>
            <Header company={'Amazon'}/>
            <Candidate details={props.location.aboutProps}/>
        </div>
    )
}

export default Applicant