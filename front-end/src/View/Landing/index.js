import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
import 'antd/dist/antd.css'; 


import { Divider } from 'antd'; 
import { Link } from "react-router-dom"; 

const Landing = () => {
  return (
      <Body/> 
  )
}

const Body = () => {
  return(
    <div id="body">
      <Header />
      <Party />
    </div>
  )
}

//header: company logo and stuff
const Header = () => {
  return(
    <div className="header">
      <Divider orientation="right">
        <Link to="/login">login</Link>
      </Divider>
      <span className="header-title">
        Copply
      </span>
      <span className="header-text">
        Making the application process seamless for both parties
      </span>
    </div>
  )
}

const Party = () => {
  return(
    <div className="Party">
      <span className="party-text">
        Are you an applicant or company? 
      </span>
      <Link to="/applicant">Applicant</Link>
      <Link to="/signup">Company</Link>
    </div>
  )
}

export default Landing