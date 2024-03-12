import React from 'react';
import Navbar from './navbar';
import { MdBuild, MdErrorOutline, MdWarning, MdInfoOutline,MdCheck } from 'react-icons/md';

const logs = {
  logs: [
    // {
    //   log: "Repair location",
    //   location: "Dariaganj",
    //   time: "10:30",
    //   type: "repair",
    //   value:203
    // },
    {
      log: 'failure',
      location: "Hauz khas",
      time: "11:00",
      type: 'failure',
      value:203
    },
    {
      log: 'failure',
      location: "Dariyaganj",
      time: "11:30",
      type: 'failure',
      value:190
    },{
      log: 'failure',
      location: "Central Park",
      time: "12:00",
      type: 'failure',
      value:199
    },
    // {
    //   log: 'Warning',
    //   location: "Central park",
    //   time: "11:30",
    //   type: 'probable_failure',
    //   value:203
    // },
    // {
    //   time: "12:30",
    //   log: 'success',
    //   location: "vaishali",
    //   type: 'success',
    //   value:203
    // }
    // ,
    // {
    //   time: "13:30",
    //   log: 'info',
    //   location: "central district",
    //   type: 'other',
    //   value:203
    // }
  ]
}

const Alert = () => {

  const typeIcon = {
    repair: <MdBuild />,
    failure: <MdErrorOutline />,
    probable_failure: <MdWarning />,
    other: <MdInfoOutline />,
    success: <MdCheck />
  }

  const typeColor = {
    repair: 'blue',
    failure: 'red',
    probable_failure: '#FF7518',
    other: 'grey',
    success:'green'
  }

  return (
    <div>
      <Navbar />
      {logs.logs.map((log, index) => (
        <div
          key={index}
          style={{
            border: `1px solid ${typeColor[log.type]}`,
            borderRadius: '10px',
            padding: '10px',
            margin: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div style={{ color: typeColor[log.type], fontSize: '18px' }}>
              {typeIcon[log.type]} {log.log}
            </div>
            <div>{log.location} - {log.time}</div>
            value: {log.value }
          </div>
          <div style={{ marginLeft: '10px' }}>
            {/* Additional information or actions can be added here */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Alert;
