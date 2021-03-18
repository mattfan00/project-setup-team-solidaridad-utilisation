import React from "react"
import {Dropdown} from 'antd'
import menu from './Dropdown.js'

const Profile = () =>{
    return (
        <Dropdown
            overlay={menu}
        >
            <a>
                Profile
            </a>
        </Dropdown>
    )
}

export default Profile