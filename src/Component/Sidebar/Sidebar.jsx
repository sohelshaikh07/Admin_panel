import React from 'react';
import './sidebar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { Timeline,Report,AttachMoney } from '@mui/icons-material';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Dashboared
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <LineStyleIcon className="sidebarIcons"/> Home
                        </li>
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcons"/> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcons"/> Sales
                        </li>                    
                    </ul>
                </div>




                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Quick Menu
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <PersonIcon className="sidebarIcons"/> User
                        </li>
                        <li className="sidebarListItem">
                            <StorefrontIcon className="sidebarIcons"/> Products
                        </li>

                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcons"/> Trasactions
                        </li>
                        
                        <li className="sidebarListItem">
                            <BarChartIcon className="sidebarIcons"/> Reports
                        </li>                    
                    </ul>
                </div>




                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Notifications
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutlineIcon className="sidebarIcons"/> Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcons"/> Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineIcon className="sidebarIcons"/> Messages
                        </li>                    
                    </ul>
                </div>



                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">
                        Staff
                    </h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutlineIcon className="sidebarIcons"/> Manage
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcons"/> Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcons"/> Reports
                        </li>                    
                    </ul>
                </div>

            </div>
        </div>
  )
};

export default Sidebar;
