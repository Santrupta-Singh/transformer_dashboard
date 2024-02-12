import React from 'react';
import Navbar from './navbar';
import { MdBuild, MdDone, MdErrorOutline, MdInfoOutline } from 'react-icons/md';

const logs = {
  logs: [
    {
      log: "hello world",
      location: "Location A",
      time: "11:30 AM",
      personInCharge: "John Doe",
      type: "repair"
    },
    {
      log: 'working',
      location: "Location B",
      time: "12:45 PM",
      personInCharge: "Jane Doe",
      type: 'fixed'
    },
    {
      log: 'crashed',
      location: "Location C",
      time: "2:00 PM",
      personInCharge: "Bob Smith",
      type: 'inspection'
    },
    {
      log: 'crashed',
      location: "Location D",
      time: "3:30 PM",
      personInCharge: "Alice Johnson",
      type: 'other'
    }
  ]
}

const Notif = () => {
  const typeIcon = {
    repair: <MdBuild />,
    fixed: <MdDone />,
    inspection: <MdErrorOutline />,
    other: <MdInfoOutline />
  }

  const typeColor = {
    repair: 'blue',
    fixed: 'green',
    inspection: 'red',
    other: 'grey'
  }

  return (
    <div>
      <Navbar />
      {logs.logs.map((log, index) => (
        <div
          key={index}
          style={{
            padding: '10px',
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: 'rgba(200, 200, 200, 0.2)', // Example background color
            borderRadius: '8px',
          }}
        >
          <div style={{ color: typeColor[log.type], fontSize: '18px', marginBottom: '8px' }}>
            {typeIcon[log.type]} {log.log}
          </div>
          <div>
            <div><strong>Location:</strong> {log.location}</div>
            <div><strong>Time:</strong> {log.time}</div>
            <div><strong>Person in Charge:</strong> {log.personInCharge}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Notif;
