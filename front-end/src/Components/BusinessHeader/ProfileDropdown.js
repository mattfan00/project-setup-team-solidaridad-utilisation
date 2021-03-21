import React from "react"
import { useHistory, Link } from "react-router-dom"
import {Dropdown, Menu} from 'antd'

const Profile = () =>{
    const history = useHistory()

    function handleMenuClick(i){
        if(i.key === '1'){
            history.push('/business/dashboard/applications/applicant')
        }
        else{
            history.push('/business/signin')
        }
    }

    const menu = () =>{
        return(
            <Menu 
                onClick={handleMenuClick}
            >
                <Menu.Item key='1'>Edit Profile</Menu.Item>
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