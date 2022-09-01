import React,{useState,useEffect} from 'react'
import "./index.css"

export default function ({id}) {
  const[paidBy,setPaidBy] = useState();
  useEffect(async () => {
     let paidby= await fetch(`https://splitwise-apiv1.herokuapp.com/user/${id}`,{
      method:'GET',
      headers:{
          "Content-Type":"application/json",
          "Accept":"application/json",
      },});
      paidby = await paidby.json();
      setPaidBy(paidby);
      console.log(paidby);
  },[]);
   return (
     
    <div className="outlinebox">
        <p className='box-text'>{paidBy?.userFirstName}</p>
    </div>
     
  )
}
