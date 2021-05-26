import React from 'react';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import './ChatBox.css';

const ChatBox = ({ msg, setMsg, sendMsg }) => {
    return (
        <form className="input-form">
            <InsertEmoticonIcon />
            <input 
                className="input" type="text" placeholder="Enter message..." 
                value={msg} 
                onChange={(e) => setMsg(e.target.value)} 
                onKeyPress={(e) => e.key === 'Enter' ? sendMsg(e) : null}
            />
            <button hidden disabled={!msg} onClick={(e) => sendMsg(e)}>Enter</button>
            <MicIcon />
        </form>
    )
}

export default ChatBox;