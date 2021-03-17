import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
import 'antd/dist/antd.css'; 


import { Divider } from 'antd'; 

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
      <link to="/applicant">Applicant</link>
      <link to="/signup">Company</link>
    </div>
  )
}

export default Landing