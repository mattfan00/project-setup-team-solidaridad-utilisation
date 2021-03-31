import React from "react"
import { useHistory, Link } from "react-router-dom"
import {Dropdown, Menu} from 'antd'

const Profile = () =>{
    const history = useHistory()

    const menu = () =>{
        return(
            <Menu>
                <Menu.Item
                    key='1'
                >
                    <Link
                    to='/business/dashboard/editprofile'>
                        Edit Profile
                    </Link>
                </Menu.Item>
                <Menu.Item 
                    key='2'
                >
                    <Link 
                        to='/business/signin'
                    >
                        Sign Out
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }

    return (
        <div>
            <Dropdown
            overlay={menu()}>
                <a>
                    Profile
                </a>
            </Dropdown>
        </div>        
    )
}

export default Profile