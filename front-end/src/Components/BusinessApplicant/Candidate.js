import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import {Card, Collapse, Dropdown, Menu} from 'antd'
import './styles.css'
import Education from './Education.js'
import WorkExperience from './WorkExperience'
import Project from './Projects.js'
import Responses from './Responses'
import {DownOutlined} from '@ant-design/icons'
import axios from 'axios'
import Application from '../../View/Applicant/Application'

const {Panel} = Collapse;

const Candidate = (props) => {
    console.log('start')
    const [status, setStatus] = useState('New')
    const [loading, setLoading] = useState(true)
    const [applicant, setApplicant] = useState()

    const { applicantID }  = useParams()

    useEffect(async () => {
        const result = await axios(`http://localhost:4000/application/${applicantID}`)
        console.log(result.data)
        setApplicant(result.data)
        setLoading(false)
    }, []);
    console.log(applicant)

    function handleMenuClick(i) {
        if(i.key == '1'){
            setStatus('Strong Candidate')
        }
        else if(i.key == '2'){
            setStatus('To Review')
        }
        else{
            setStatus('Rejected')
            //do something else to erase the applicant
        }
    }

    const menu = () =>{
        return(
            <Menu 
                onClick={handleMenuClick}
            >
                <Menu.Item key='1'>Approve</Menu.Item>
                <Menu.Item key='2'>Review</Menu.Item>
                <Menu.Item key='3'>Reject</Menu.Item>
            </Menu>
        );
    }

    return (
        <div className="content">
            {!loading ? (
                <Card
                title={applicant.firstName +' '+ applicant.lastName}
                extra = {
                    <Dropdown
                        overlay={menu()}
                    >
                        <a>
                            {status} <DownOutlined/>
                        </a>
                    </Dropdown>
                }
            >
                <Collapse
                    bordered={false}
                    defaultActiveKey={['1']}
                >
                    <Panel 
                        header="Education" 
                        key='1'
                    >
                        {applicant.education && applicant.education.map(education =>
                            <Education
                                education = "NYU"
                                year = '2020'
                                description = 'I paid them 70k/year'
                            />
                        )}
                    </Panel>
                    <Panel 
                        header="Work Experience" 
                        key='2'
                    >
                        {applicant.workExperience && applicant.workExperience.map(w =>
                            <WorkExperience 
                                company={w.company}
                                role={w.role}
                                year={w.year}
                                desc={w.description}
                            />
                        )}
                    </Panel>

                    <Panel 
                        header="Projects" 
                        key='4'
                    >
                        {applicant.projects && applicant.projects.map(p =>
                            <Project
                                projectTitle={p.title}
                                description={p.description}
                                year={p.year}
                            />
                        )}
                    </Panel>   

                    <Panel 
                        header="Responses" 
                        key='3'
                    >
                        {console.log(applicant.extraQuestions)}
                        <Responses 
                            questions={applicant.extraQuestions[0]} 
                        />
                    </Panel>                
                </Collapse>
            </Card>
            ) : ""}
            
        </div>
    )
}

export default Candidate