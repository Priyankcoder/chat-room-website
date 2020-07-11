import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css';


const Join = () => {
    const [room, setRoom] = useState('');
    const [name, setName] = useState('');

    return (
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
            <h1 className="heading">Join</h1>
          <div>
            <input
              type="text"
              className="joinInput"
              type="text"
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="text"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
              placeholder="Room"
            />
          </div>
          <Link onClick = {event=>(!name || !room) ? event.preventDefault(): null} to = {`/chat?name=${name}&room=${room}`}>
            <button className = "button mt-20" type = "submit">Sign In</button>
          </Link>
          
        </div>
      </div>
    );
}

export default Join;