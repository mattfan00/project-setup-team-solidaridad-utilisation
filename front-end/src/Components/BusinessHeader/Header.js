import React from 'react'
import './styles.css'
import Profile from './ProfileDropdown'
import logo from '../ApplicantHeader/copply.png'
import {PageHeader} from 'antd'
import {Link} from 'react-router-dom'

const Header = (props) => {
    console.log(props.company)

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
                extra={
                    <Profile />
                }
            />
        </div>
    )
}

export default Header