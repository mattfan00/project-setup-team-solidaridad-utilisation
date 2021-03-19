import React from 'react'
import {Card} from 'antd'
import './styles.css'
import Education from './Education.js'
import WorkExperience from './WorkExperience'


const Candidate = (props) => {
    return (
        <div className="content">
            <Card
            title="Applicant Name{props.name}"
            
            >
                <Education/>
                <WorkExperience/>
                {props.work && props.work.map(w =>
                    <WorkExperience workExp = {w}/>
                )}
                

            </Card>
        </div>
    )
}

export default Candidate