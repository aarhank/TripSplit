import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import './index.css'
import split from './split.gif'
import ClipLoader from "react-spinners/CircleLoader";
import { useHistory } from 'react-router-dom'


export default function Signup() {
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  const [loading,setLoading] = useState();
  const [firstName,setFirstName]= useState();
  const [lastName,setLastName] = useState();
  const [showPassword,setShow] = useState(false)

  const history = useHistory();
  if(localStorage.getItem('user-info')){
    history.push('/dashboard')
    window.location.reload();
}
  useEffect(()=> {
    if(localStorage.getItem('user-info')) {
        history.push("/dashboard")
    }
  }, [])

  var index = Math.floor(Math.random() * 10);
  if(index===9)
  {index=index-1}
  const quote = ["Go ahead -- hold your breath!","Alt-F4 speeds things up...","We're working very Hard .... Really","You are number 2843684714 in the queue","We are not liable for any broken screens as a result of waiting","Well, this is embarrassing","It's not you. It's me","My other loading screen is much faster","Web developers do it with <style>"];

  async function signup(){
        
    //credentials
    setLoading(true);
    let item = {
      "userFirstName":firstName,
      "userLastName":lastName,
      "userMail":email,
      "userPassword":password,
      "userMatchingPassword":password
    }
    let user;
    try{
      let result= await fetch('https://splitwise-apiv1.herokuapp.com/user/register',{
      method:'POST',
      headers:{
          "Content-Type":"application/json",
      },
      body:JSON.stringify(item)
      });
      result = await result.json();
      if(result != null)
      {
        localStorage.setItem('user-info',JSON.stringify(result));
        user = JSON.parse(localStorage.getItem('user-info'));
         
      }
      else{
        setLoading(false);
        return;
      }
    }
    catch(e){
    console.log(e);
    }

    // let groups= await fetch(`https://splitwise-apiv1.herokuapp.com/user/groups/${user.id}`,{
    //   method:'GET',
    //   headers:{
    //       "Content-Type":"application/json",
    //       "Accept":"application/json",
    //   },});
    //   groups = await groups.json();
    //   localStorage.setItem('groups',JSON.stringify(groups));
    //   setLoading(false);
      history.push("/dashboard");
    


}
  return (
    <>
            {loading ?
            <>
            <div className="login-screen">
            <ClipLoader color={'#C715DE'} loading={loading} size={100} />
            </div>
            <br/>
            <p className="login-quote" >{quote[index]}</p>   
        
            </>
            :
            <div className='m-login'>
            <div className='gif-box'>
            {/* <Iframe url="https://giphy.com/embed/xT1R9TaUQfgf5qQZEY" width="50%" height="50%" position='absolute' className="giphy-embed" ></Iframe> */}
            <img src={split} alt="loading..." style={{height:'100%',width:'50%',position:'absolute'}} />
            </div>
            <div className='login-s'>
            <p className='login-head'>Trip<span style={{color:'#674fa3'}}>Split</span></p>
            <div className='login-box'>
            <TextField label="First Name" onChange={(e)=>{setFirstName(e.target.value)}}/>
          
            <TextField label="Last Name" onChange={(e)=>{setLastName(e.target.value)}}/>
            <TextField label="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <TextField 
           
            required
            
            name="password"
            
            type={showPassword?"text":"password"}
            label="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <div style={{textAlign:'center',backgroundColor:'#674fa3',borderRadius:'0.5vw',cursor:'pointer'}} onClick={signup} >
            <p style={{color:'white'}}>Sign Up</p>
            </div>
                {/* <button className='login-button' placeholder='Login' /> */}
            </div>
            <p>Have an account?<span onClick={()=>{history.push("/login")}} style={{cursor:'pointer'}} > Sign in </span></p>

            </div>
            </div>
            }
            </>
    
  )
}
