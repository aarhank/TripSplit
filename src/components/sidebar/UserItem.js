import React from 'react'
import "./index.css"
import LogoDevOutlinedIcon from '@mui/icons-material/LogoDevOutlined';


export default function UserItem({name,icon,lastName}) {
  return (
    <div className='UserItem-main'>
        {icon}
        <div>
        <p className="white sidebaritem-text">{name}<br/>{lastName}</p>
        </div>
    </div>
  )
}
