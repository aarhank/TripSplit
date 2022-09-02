import React,{useState,useEffect} from 'react'
import "./index.css"
import Organization from "./Organizations"

export default function TopContainer() {
  let user = JSON.parse(localStorage.getItem('user-info'));
  
  const[group,setGroup] = useState([]);
  useEffect( () => {
    async function fetchData() {
      let groups= await fetch(`https://splitwise-apiv1.herokuapp.com/user/groups/${user.id}`,{
        method:'GET',
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json",
        },});
        groups = await groups.json();
        localStorage.setItem('groups',JSON.stringify(groups));
        setGroup(JSON.parse(localStorage.getItem('groups')));
    }
    fetchData()
  },[]);
  
  return (
    <div className='organizations'>
      {
        group?.map(post=>{
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
