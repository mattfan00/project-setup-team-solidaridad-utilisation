import React from "react"
import {
    Typography,
    Col,
} from "antd"
import Title from "antd/lib/skeleton/Title";


const JobDescription = (props) => {
    const {Title} = Typography;
    return (
        <div>
            <Col span={24}>
                <div layout="vertical">
                    <div className="CompanyLogo">

                    </div>

                    <div className="JobTitle">
                        <h1>Software Engineer</h1>
                        <h2>Amazon</h2>
                    </div>
                    
                    <div className="Description">
                        <h3>Job Description</h3>
                        <p>You will be a crucial member of the core team, from building back-end infrastructure to user-facing applications — and everything in between. You will build features across the platform from user-facing web applications, workflow systems, data modeling engines, and integrations with disparate third party systems. You will help establish technical strategy and direction and will also support growing and developing a world-class engineering team. There are so many important problems to solve that directly impact the lives of the 10,000 Americans entering retirement every day.</p>
                        <p>We're looking for a software engineer intern to support our core team. As an early team member, you will have broad impact over the technology, the product, and our company's culture.</p>
                    </div>
                    <div className="Description">
                        <h3>About Company</h3>    
                        <p>Chapter focuses on Healthcare, Health and Insurance, and Retirement. Their company has offices in New York City. They have a small team that's between 1-10 employees.</p>   
                    </div>
                    <div className="Description">
                        <h3>Job Location</h3>
                        <p>New York, New York</p>    
                    </div>   
                    <div className="Description">
                    <h3>Desired Skills</h3>
                    <ul>
                        <li>Passion and excitement for the cause: to re-define how Americans age and transition into their third chapter.</li>
                        <li>Deep software engineering background and proven ability to ship world-class software products.</li>
                        <li>Familiarity with data structures, storage systems, and front-end frameworks. Proficiency with programming languages such as Java, React, JavaScript, TypeScript or similar languages.</li>
                        <li>Proven ability to drive product and engineering strategy.</li>
                        <li>Comfort with ambiguity. While starting from a blank slate is challenging, you find it exciting, rewarding, and empowering. You are able to build products from the ground up.</li>
                        <li>Obsession with end-user experience.</li>
                        <li>Low ego.</li>
                        <li>First-principles thinker: we don't care how others have done things.</li>
                        <li>Ability to define projects and execute. Excited to set goals and be held accountable for hitting those goals.</li>
                        <li>Superlative positional empathy with a strong understanding of how technical decisions impact the user of what you’re building.</li>
                        <li>Skill and comfort working in a rapidly changing environment with dynamic objectives and iteration with users.</li>
                    </ul>
                    </div> 
                </div>   
            </Col>
        </div>
    )
}

export default JobDescription