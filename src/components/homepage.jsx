import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import './css/homepage.css'
import { TableauEmbed } from "@stoddabr/react-tableau-embed-live";


const Homepage = () => {
  return (
    <div >
      <div>
        <Navbar />
      </div>
      <div className='content_homepage'>
        <Sidebar />
        <TableauEmbed
        sourceUrl="https://public.tableau.com/views/Delhi-dash1/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
        width='1500' // Set width to 100%
        height='800' // Set height to 100%
        device="desktop"
        hide-tabs
      />

      </div>
    </div>
  )
}

export default Homepage