import React from 'react'
import "./index.css"

export default function SideBarItems({name,icon}) {
  return (
    <div className='SideBarItem-main'>
        {icon}
        <p className='sidebaritem-text'>{name}</p>
     
    </div>
  )
}
