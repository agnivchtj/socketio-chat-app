import React from 'react';
import './Message.css';

const Message = ({ name, message: { user, text } }) => {
    let isSent = false;

    const trimmedName = name.trim().toLowerCase();
    if (user === trimmedName) isSent = true;

    return (
        isSent 
            ? (
                <div className="messageContainer justifyEnd">
                    <p className="sentText pr-10">{ trimmedName }</p>
                    <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ text }</p>
                    </div>
                </div>
            ) : (
                <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundWhite">
                        <p className="messageText colorDark">{ text }</p>
                    </div>
                    <p className="sentText pl-10">{ user }</p>
                </div>
            )
    )
}

export default Message;