import React from 'react'
import './styles.css'
import Profile from './ProfileDropdown'
import logo from '../ApplicantHeader/copply.png'
import { message, PageHeader, Button } from 'antd'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../Context/AuthContext"

const Header = (props) => {
    const {businessUser, setBusinessUser, setBusinessToken } = useContext(AuthContext);
    console.log(props.company)

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
                subTitle={props.company}
                extra={[
                    <Profile />,
                    logoutButton()
                ]}
            />
        </div>
    )
}

export default Header