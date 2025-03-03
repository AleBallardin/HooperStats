import './profile.css'
import TopMenu from '../components/topMenu';
import { useEffect, useState } from 'react';
import Dashboard from './porfile_comps/dashboard';

function Profile() {
    return (
        <>
        <TopMenu/>
        <div className='profile-container'>
            <div className="profile__header">
                <img src="../media/profile-default.svg" alt="" className="profile__pic" />
            </div>
            <div className="user_info">
                <h1 className='username'>Username</h1>
                <i className="fa-solid fa-user-pen"></i>
            </div>
            <Dashboard></Dashboard>
        </div>
        </>
        
    )
}

export default Profile