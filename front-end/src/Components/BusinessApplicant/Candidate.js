import React from 'react'
import {Card} from 'antd'
import './styles.css'
import Education from './Education.js'
import WorkExperience from './WorkExperience'
import Project from './Projects.js'
import Responses from './Responses'

const Candidate = (props) => {
    return (
        <div className="content">
            <Card
            title={"Applicant Name" + props.name}
            
            >
                <Education education={props.education} year={props.educationYear}/>
                <WorkExperience work={props.work}/> 
                {props.work && props.work.map(w =>
                    <WorkExperience workExp = {w}/>
                )}
                <Project/>
                {props.projects && props.projects.map(p => 
                    <Project project = {p}/>    
                )}
                <Responses answers={props.answers}/>
            </Card>
        </div>
    )
}

export default Candidate