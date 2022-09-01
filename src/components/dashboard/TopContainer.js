import React,{useState,useEffect} from 'react'
import "./index.css"
import Organization from "./Organizations"

export default function TopContainer() {
  const groups = JSON.parse(localStorage.getItem('groups'));
  
  return (
    <div className='organizations'>
      {
        groups?.map(post=>{
          return(
            <>
              <Organization name={post.groupName} id={post.id}/>
            </>
          )
        })
      }
    </div>
  )
}
