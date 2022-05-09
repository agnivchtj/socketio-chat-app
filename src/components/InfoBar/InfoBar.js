import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './InfoBar.css';

const InfoBar = ({ room }) => {
    return (
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online_image" />
                <h3>{ room }</h3>
            </div>
            <div className="rightInnerContainer">
                <ExitToAppIcon 
                    onClick={() => window.location.href = '/'} 
                    style={{ cursor: 'pointer' }}
                />
            </div>
        </div>
    );
}

export default InfoBar;