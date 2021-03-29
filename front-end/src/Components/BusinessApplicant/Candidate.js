import React, {useState, useEffect} from 'react'
import {Card, Collapse, Dropdown, Menu} from 'antd'
import './styles.css'
import Education from './Education.js'
import WorkExperience from './WorkExperience'
import Project from './Projects.js'
import Responses from './Responses'
import {DownOutlined} from '@ant-design/icons'
import axios from 'axios'

const {Panel} = Collapse;

const Candidate = (props) => {
    console.log('start')
    const [status, setStatus] = useState('New')
    const [loading, setLoading] = useState(true)
    const [applicant, setApplicant] = useState()

    useEffect(async () => {
        const result = await axios("http://localhost:4000/business/application/details")
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
                title={applicant.firstname +' '+ applicant.lastname}
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
                        
                        {console.log(applicant.work)}
                        <Education 
                            education={applicant.education} 
                            year={applicant.gradYear} 
                            description={applicant.edDescription}
                        />
                    </Panel>
                    <Panel 
                        header="Work Experience" 
                        key='2'
                    >
                        {applicant.work && applicant.work.map(w =>
                            <WorkExperience 
                                company={w.company}
                                role={w.role}
                                year={w.year}
                                desc={w.description}
                            />
                        )}
                    </Panel>
                    {console.log(applicant.projects[0])}
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
                        {console.log(applicant.responses[0])}
                        <Responses 
                            questions={applicant.responses[0]} 
                        />
                    </Panel>                
                </Collapse>
            </Card>
            ) : ""}
            
        </div>
    )
}

export default Candidate