import React from 'react';
import './Topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
// import AcUnitIcon from '@mui/icons-material/AcUnit';

function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarwrapper">
                <div className="topLeft">
                    <span className="logo">Y-Admin</span>
                </div>
                <div className="topRight">
                    <div className="topBarIconContainer">
                        <NotificationsNoneIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <LanguageIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topBarIconContainer">
                        <SettingsIcon />
                    </div>

                    <div className="topBarIconContainer">
                        <img
                            src="https://i.pinimg.com/originals/49/3f/a0/493fa0f13970ab3ef29375669f670451.jpg"
                            alt="logo"
                            className="topAvator"
                        />
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Topbar;
