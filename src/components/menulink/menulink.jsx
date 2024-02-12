import React from 'react'
import { Link } from 'react-router-dom';
import '../css/menulink.css'
const MenuLink = ({item}) => {


  return (
    <Link to={item.path} className='container_menulink'>
      {item.icon}
      {item.title}
    </Link>
  ) 
}

export default MenuLink