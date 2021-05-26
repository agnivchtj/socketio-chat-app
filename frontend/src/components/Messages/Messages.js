import React from 'react';
import Scroll from 'react-scroll-to-bottom';
import Message from './Message/Message';
import './Messages.css';

const Messages = ({ name, msgs, setMsgs }) => {
    return (
        <Scroll className="messages">
            {
                msgs.map((msg, i) => (
                    <div key={i}>
                        <Message message={msg} name={name} />
                    </div>
                ))
            }
        </Scroll>
    );
}

export default Messages;