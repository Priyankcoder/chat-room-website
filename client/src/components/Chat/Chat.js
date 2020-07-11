import React, {useEffect} from "react";
import {io} from 'socket.io-client';
import {queryString} from 'query-string';

const Chat  = () => {
  let socket;
  const ENDPOINT = "localhost:5000";
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");
  useEffect(({location})=>{
    socket = io(ENDPOINT);
    const {name, room} = queryString.parse(location.search);
    setName(name);
    setRoom(room);
    socket.emit('join', {name, room});

  }, [ENDPOINT, location.search])
  return <h1>Chat</h1>;
};

export default Chat ;
