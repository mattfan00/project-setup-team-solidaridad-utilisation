import React from "react"
import companyLogo from './CompanyLogo.jpg'
import './index.css'

const CompanyLogo = () => {
    return(
        <div className="logoContainer">
        <img src={companyLogo} className="companyLogo"/> 
        </div>
    )
}

export default CompanyLogo
