import React from 'react';
import "./index.css";
import MainLogo from '../components/sidebar/MainLogo';
import UserItem from '../components/sidebar/UserItem';
import SideBarItems from '../components/sidebar/SideBarItems';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useHistory } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

function SideBar () {
    const user = JSON.parse(localStorage.getItem('user-info'));
    const groups = JSON.parse(localStorage.getItem('groups'));;
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
            <div className='groupss'>
            {groups?.map(post=>{
                return(
                        
                            <SideBarItems name={post.groupName} id={post.id} key={post.id} icon={<PeopleOutlineIcon />}/>
                        
                )
            })}
            </div>
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