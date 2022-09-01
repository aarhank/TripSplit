import React from 'react'
import './index.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Member({firstName,lastName}) {

  return (
    <div className='m-member'>
        <PersonOutlineIcon />
        <div>
        <p className="sidebaritem-text">{`${firstName} ${lastName}`}</p>
        </div>
    </div>
  )
}
