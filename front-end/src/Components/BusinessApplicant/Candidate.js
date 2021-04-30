import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import {Card, Collapse, Dropdown, Menu} from 'antd'
import './styles.css'
import Education from './Education.js'
import WorkExperience from './WorkExperience'
import Project from './Projects.js'
import ExtraQ from './ExtraQ'
import Details from './Details'
import {DownOutlined} from '@ant-design/icons'
import axios from 'axios'
import moment from "moment"

const {Panel} = Collapse;

const Candidate = (props) => {
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

    const formatDate = (date) => {
        return moment(date).format("MMM YYYY")
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
                        header='Details'
                        key='1'
                    >
                        <Details
                            Details = {applicant.details}
                        />
                    </Panel>
                    <Panel
                        header="Education"
                        key='2'
                    >
                        {applicant.education && applicant.education.map(education =>
                            <Education
                                education = {education.school}
                                level = {education.level}
                                year = {formatDate(education.startDate) + " - " + formatDate(education.endDate)}
                                description = {education.major}
                            />
                        )}
                    </Panel>
                    <Panel
                        header="Work Experience"
                        key='3'
                    >
                        {applicant.workExperience && applicant.workExperience.map(w =>
                            <WorkExperience
                                employer={w.employer}
                                title={w.title}
                                year={`${formatDate(w.startDate)} - ${w.currentJob ? "Present" : formatDate(w.endDate)}`}
                                desc={w.description}
                            />
                        )}
                    </Panel>

                    {/* <Panel
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
                    </Panel> */}

                    <Panel
                        header="Responses"
                        key='4'
                    >
                        {console.log(applicant.extraQuestions)}
                        <ExtraQ
                            extraQ={applicant.extraQuestions}
                        />
                    </Panel>
                </Collapse>
            </Card>
            ) : ""}

        </div>
    )
}

export default Candidate