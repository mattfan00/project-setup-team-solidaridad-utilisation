import React from 'react'
import './styles.css'
import Profile from './ProfileDropdown'
import logo from '../ApplicantHeader/copply.png'

const Header = () => {
    return (
        <div className='header'>
            <div className='welcomeText'>
                $Company Name$
            </div>
            <div className="profile">
                <Profile/>
            </div>
        </div>
    )
}

export default Header