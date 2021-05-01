import React, { useState, useContext, useEffect } from 'react'
import './styles.css'
import Profile from './ProfileDropdown'
import logo from '../ApplicantHeader/copply.png'
import { message, PageHeader, Button } from 'antd'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../Context/AuthContext"
import axios from "axios"

const Header = (props) => {
    const {businessUser, setBusinessUser, setBusinessToken } = useContext(AuthContext);
    const [company, setCompany] = useState()

    useEffect(async () => {
        const result = await axios.get(`/company/${props.company}`)
        setCompany(result.data)
    }, [])

    const logout = () => {
        setBusinessUser(null)
        setBusinessToken(null)
        localStorage.removeItem("businessToken")
        message.info("You have been logged out")
    }

    const logoutButton = () => {
        if (businessUser) {
            return <Button key="1" onClick={logout}>Logout</Button>
        } else {
            return ""
        }
    }

    return (
        <div className='top'>
            <PageHeader
                className="site-page-header"
                title={
                    <Link
                    to='/business/dashboard'>
                        <img src={logo} alt="website logo" className="logo" />
                    </Link>
                }
                subTitle={company?.name}
                extra={[
                    <Profile />,
                    logoutButton()
                ]}
            />
        </div>
    )
}

export default Header