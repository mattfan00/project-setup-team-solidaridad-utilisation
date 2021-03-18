import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
import 'antd/dist/antd.css'; 


import { Layout } from 'antd'; 
import { Link } from "react-router-dom"; 
import { Row, Col } from 'antd'; 
import { Button } from 'antd'; 
const Landing = () => {
  return (
    <body>
      <div class="main">
          <h1>Copply</h1>
          <h2>Making the application process seamless for both parties</h2>
        <p>Are you an applicant or Company?</p> 
        <div class="button">
          <Button size="large" href="/applicant/signin">Applicant</Button>
          <Button size="large" href="/business/signin">Company</Button>
        </div>
      </div>
    </body>
      
  )
}

export default Landing