import React from 'react';
import "./index.css";
import MainLogo from '../components/sidebar/MainLogo';
import UserItem from '../components/sidebar/UserItem';
import SideBarItems from '../components/sidebar/SideBarItems';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EventIcon from '@mui/icons-material/Event';
import { useHistory } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

function SideBar () {
    const user = JSON.parse(localStorage.getItem('user-info'));
    
    const groups = JSON.parse(localStorage.getItem('groups'));;

    // async function group(){
    //     //credentials
    //     setLoading(true);
    //     try{
    //       let result= await fetch(`https://splitwise-apiv1.herokuapp.com/user/groups/${user.id}`,{
    //       method:'GET',
    //       headers:{
    //           "Content-Type":"application/json",
    //       },});
    //       result = await result.json();
    //       if(result != null)
    //       {
    //         localStorage.setItem('groups',JSON.stringify(result));
    //         groups = JSON.parse(localStorage.getItem('groups'));
    //         console.log(group.toString());
    //         setLoading(false);
    //         return; 
    //       }
    //       else{
    //         setLoading(false);
    //         return;
    //       }
    //     }
    //     catch(e){
    //     console.log(e);
    //     }
    // }


    // if(localStorage.getItem('groups')){
    //     groups = JSON.parse(localStorage.getItem('groups'));
    // }
    const history = useHistory();
    function logout(){
        localStorage.clear();
        history.push('/login');
    }

    return (
        <div className='sidebar-main'>
            <MainLogo/>
            <div className='sidebar-item'>
            <UserItem name={`${user.userFirstName}`} lastName={user.userLastName} icon={<PersonOutlineIcon style={{color:'white',fontSize:"30px"}} />}/>
            <div className='sidebar-items'>
            <p className='sidebar-grp' >Groups</p>
            {groups?.map(post=>{
                return(
                        <>
                            <SideBarItems name={post.groupName} id={post.id} key={post.id} icon={<PeopleOutlineIcon />}/>
                        </>
                )
            })}
            
            </div>
            
            </div>
            <div className='logout' onClick={logout}>
                <LogoutIcon style={{fontSize:'19px'}}/>
                <p>Logout</p>
            </div>
        </div>
    );
}

export default SideBar;