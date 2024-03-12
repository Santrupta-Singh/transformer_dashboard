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
        sourceUrl="https://prod-apnortheast-a.online.tableau.com/t/saikhadloya247a601d44b3f/views/circlehead-new/Dashboard1?:origin=card_share_link&:embed=n"
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