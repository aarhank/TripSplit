import React from 'react';
import './index.css'
import SideBar from '../containers/SideBar';
import MainDashboard from '../containers/MainDashboard';
import { useHistory } from 'react-router-dom'

function Dashboard () {
    const history = useHistory();
    if(!localStorage.getItem('user-info')){
        history.push('/login')
        window.location.reload();
    }
    return (
        <div className='dashboard-main'>
            <SideBar/>
            <MainDashboard/>
        </div>
    );
}

export default Dashboard;