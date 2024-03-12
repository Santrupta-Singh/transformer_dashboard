import React, { useContext } from 'react'
import exampleImg from './files/noavatar.png'
import './css/navbar.css'
import { Link } from 'react-router-dom';
import {
    MdNotifications,
    MdLogout,
} from "react-icons/md";
import { IoAlertCircleOutline } from "react-icons/io5";
import { FullContext } from '../context';
import { useEffect } from 'react';

const Navbar = () => {
    const { name, role  } = useContext(FullContext)
    const user = {
        username: name,
        userrole: role,
        img: null,
    }
    return (
        <div className="container_navbar">
            <div className={user}>
                <img src={user.img || exampleImg}
                    className='userimage_navbar'
                />
                <div className='userdetails_navbar'>
                    <span className='username_navbar'> {user.username} </span>
                    <span className='userrole_navbar'>{user.userrole} </span>
                </div>
            </div>
            <Link to='/' > <div className='title_navbar'>Division-Head Dashboard</div> </Link>
            <div className='menu_navbar'>
                <Link to='/alert'><IoAlertCircleOutline size={20} /></Link>
                <Link to='/notif' ><MdNotifications size={20} /> </Link>

                <MdLogout size={20} />

            </div>
        </div>
    )
}

export default Navbar