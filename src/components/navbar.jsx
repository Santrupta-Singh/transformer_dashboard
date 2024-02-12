import React from 'react'
import exampleImg from './files/noavatar.png'
import './css/navbar.css'
import { Link } from 'react-router-dom';
import {
    MdNotifications,
    MdLogout,
} from "react-icons/md";
import { IoAlertCircleOutline } from "react-icons/io5";
const user = {
    username: "John Doe",
    userrole: " Administrator",
    img: null,
}
const Navbar = () => {



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
           <Link to='/' > <div className='title_navbar'>BYPL Dashboard</div> </Link>
            <div className='menu_navbar'>
                <Link to='/alert'><IoAlertCircleOutline size={20} /></Link>
                <Link to='/notif' ><MdNotifications size={20} /> </Link>

                <MdLogout size={20} />

            </div>
        </div>
    )
}

export default Navbar