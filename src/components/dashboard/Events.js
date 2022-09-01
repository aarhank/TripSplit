import React from 'react'
import "./index.css"
import FilledBox from './FilledBox'
import OutlineBox from './OutlineBox'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Events({name,key,paidBy,amt}) {
  return (
    <div className='event-main'>
        <div className='event-content'>
        <p className='event-head'>{name}</p>
        <div className='event-icons'>
            <FilledBox text={`₹${amt}`}/>
            <OutlineBox id={paidBy}/>
        </div>
        </div>
        <ArrowForwardIosIcon/>
    </div>
  )
}
