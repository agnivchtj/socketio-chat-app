import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import InfoBar from '../InfoBar/InfoBar';
import Messages from '../Messages/Messages';
import ChatBox from '../ChatBox/ChatBox';
import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [msg, setMsg] = useState('');
    const [msgs, setMsgs] = useState([]);

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io('http://localhost:5000');
        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {});

        return () => {
            socket.emit('disconnect');
            socket.off();
        };
    }, ['http://localhost:5000', location.search]);


    // Message handler
    useEffect(() => {
        socket.on('message', (msg) => {
            setMsgs([...msgs, msg]);
        })

    }, [msgs]);


    // Function to send messages
    const sendMessage = (event) => {
        event.preventDefault();

        if (msg) {
            socket.emit('sendMessage', msg, () => setMsg(''));
        }
    }

    console.log(msg, msgs);


    return (
        <div className="outerContainer">
            <div className="innerContainer">
                <InfoBar room={room} />
                <Messages name={name} msgs={msgs} setMsgs={setMsgs} />
                <ChatBox msg={msg} setMsg={setMsg} sendMsg={sendMessage} />
            </div>
        </div>
    );
}

export default Chat;