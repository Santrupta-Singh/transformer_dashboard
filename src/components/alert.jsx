import React from 'react';
import Navbar from './navbar';
import { MdBuild, MdErrorOutline, MdWarning, MdInfoOutline } from 'react-icons/md';

const logs = {
  logs: [
    {
      log: "hello world",
      location: "location",
      time: "11:30",
      type: "repair"
    },
    {
      log: 'working',
      location: "location",
      time: "11:30",
      type: 'failure'
    },
    {
      log: 'crashed',
      location: "location",
      time: "11:30",
      type: 'probable_failure'
    },
    {
      time: "11:30",
      log: 'crashed',
      location: "location",
      type: 'other'
    }
  ]
}

const Alert = () => {

  const typeIcon = {
    repair: <MdBuild />,
    failure: <MdErrorOutline />,
    probable_failure: <MdWarning />,
    other: <MdInfoOutline />
  }

  const typeColor = {
    repair: 'blue',
    failure: 'red',
    probable_failure: '#FF7518',
    other: 'grey'
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
