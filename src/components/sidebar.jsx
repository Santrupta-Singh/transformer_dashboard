import React from 'react'
import './css/sidebar.css'
import {
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";
import MenuLink from './menulink/menulink';


const menuItems = [
  {
    title: "Analytics",
    list: [
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (

    <div>
      <div className='container_sidebar'>
        <ul className='list_sidebar'>
          {menuItems.map((item)=>(
            <li key={item.title}>
              <span className='item_sidebar'>{item.title}</span>
              {item.list.map((subitem)=>(
                <MenuLink item ={subitem} key = {subitem.title} ></MenuLink>
              ))}
            </li>
          ))}
        </ul>
      </div>

    </div>
  
    )
}

export default Sidebar