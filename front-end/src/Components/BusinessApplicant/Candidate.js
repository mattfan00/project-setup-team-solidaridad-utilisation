import React, {useState} from 'react'
import {Card, Collapse, Dropdown, Menu} from 'antd'
import './styles.css'
import Education from './Education.js'
import WorkExperience from './WorkExperience'
import Project from './Projects.js'
import Responses from './Responses'
import {DownOutlined} from '@ant-design/icons'

const {Panel} = Collapse;

const Candidate = (props) => {
    
    const [status, setStatus] = useState('New')
    
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
            <Card
                title={props.details.firstname +' '+ props.details.lastname}
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
                        {console.log(props.details)}
                        {console.log(props.details.work)}
                        <Education 
                            education={props.details.education} 
                            year={props.details.gradYear} 
                            description={props.details.edDescription}
                        />
                    </Panel>
                    <Panel 
                        header="Work Experience" 
                        key='2'
                    >
                        {props.details.work && props.details.work.map(w =>
                            <WorkExperience 
                                company={w.company}
                                role={w.role}
                                year={w.year}
                                desc={w.description}
                            />
                        )}
                    </Panel>
                    {console.log(props.details.projects[0])}
                    <Panel 
                        header="Projects" 
                        key='4'
                    >
                        <Project 
                            projectTitle={props.details.projects[0].title}
                            description={props.details.projects[0].description}
                            year={props.details.projects[0].year}
                        />
                            {props.details.projects && props.details.projects.map(p =>
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
                        <Responses 
                            answers={props.details.responses} 
                        />
                    </Panel>                
                </Collapse>
            </Card>
        </div>
    )
}

export default Candidate