/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
import queryString from 'query-string';
const socket = io.connect("http://localhost:3001");

const Poker = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    useEffect ( () => {
        const {name , room} = queryString.parse(location.search);
        setName(name);
        setRoom(room);
        console.log(name, room)
        socket.emit('join', { name, room },(error)=>{
          if(error){
            alert(error);
            // setBackerror('1');
          }
        });
    }, [socket, location.search]);   
    return (  
        <div className="Planning-Poker-Main">
            
        </div>
    );
}
 
export default Poker;
