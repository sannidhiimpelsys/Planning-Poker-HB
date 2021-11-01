/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
import queryString from 'query-string';
import Logo from './Logo';
import ShareLink from './invite/ShareLink';

import StoryDescription from './StoryDescription';
import './poker.css'
import { useHistory } from "react-router";
import Card from './Card';
import Table from "./Table";
import Hamburger from "./Hamburger"

const socket = io.connect("http://localhost:3001");
var chooseTime=0;

var series =""
var cardVales =""
var value ="";

const Poker = () => {
    const history = useHistory();
    var [name, setName] = useState('');
    const [room, setRoom] = useState('');
    var [cardVale, setCardVal] = useState([""]);
    const [users, setUsers] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const [hand, setHand] = useState([]);
    const [selected,setSelected] = useState('');
    const [placed,setPlaced]= useState([]);
    const [numberofuser,setNumberofuser]=useState(null);
    const [flag,setFlag]=useState(false);

    const [on, setOn] = useState(false);
    const [chatT, setChatT] = useState(false);
    const [onBlur, setOnBlur] = useState(true);
    var [noName,setNoName]=useState(false);
 
    

    useEffect ( () => {
        var {name , room, cardVale} = queryString.parse(location.search);
       
       
        setRoom(room);
        setName(name);
        if(!name){
          setNoName(true);
        }
        series =cardVale
        console.log(series)
        cardVale = series.split(',');
        cardVales = series.split(',');
        cardVale.forEach(element => {
          console.log(element.toString())
          setCardVal( [...cardVale, element])
        });
        console.log(cardVales)
        // setCardVal(...cardVal,cardVal);
        
  
        socket.emit('join', { name, room, cardVale},(error)=>{
          if(error){
            alert(error);
            // setBackerror('1');
          }
        });
        
    }, [socket, location.search]);   
    useEffect( () =>{
     
    },[socket])
    //Chat

    useEffect(() => {
        socket.on("message", (message) => {
          setMessages((messages) => [...messages, message]);
        });
    
        socket.on("roomData", ({ users }) => {
          setUsers(users);
        });
    
        socket.on("receive", (data) => {
         
        });
      }, []);

      //cards
        useEffect(() => {
          addCards();
        }, []);

        useEffect(()=>{
          socket.on("playerdet",(data)=>{
            setNumberofuser(data);
            console.log(numberofuser);
        })
        socket.on("preach",(data)=>{
          if(data === 'reset'){
            setFlag(0);
            addCards();
          }
      })
      socket.on("selected",(data)=>{
        setSelected(data);
      });
        },[socket])
        const goback =() =>{
          console.log(chooseTime);
          socket.emit("preach",'reset')
        }
        const addCards = () => {
          let count = cardVales.length;
          setHand([cardVales[count - 1]]);
      
          const interval = setInterval(() => {
            --count;
            if (count === 0) return clearInterval(interval);
            setHand((prevValues) => [...prevValues, cardVales[count - 1]]);
          }, 100);
        };
        const removeCard = (value) => {
          setHand((prevValues) => prevValues.filter((e) => e !== value));
          setPlaced(value);
          setFlag(1);
        };
      
    
      const sendMessage = (event) => {
        event.preventDefault();
    
        if (message) {
          socket.emit("sendMessage", message, () => setMessage(""));
        }
      };
      //Name Functions
        function handleFlag(e) {
          
          setName(value);
          setOn(!on)
          console.log(value)
          history.push(`/poker?name=${value}&room=${room}&cardVale=${series}`, { some: 'state' }); 
        }

        const Log = (props) => { 

          return(
          <div className={on ? "off" : null} id='name'>
            <form action="form.html" method="POST"  >
              <input type="text" name="sda" id="asd" placeholder="Enter name" 
              onChange={(e) =>{value = e.target.value}}  required/> 
              <button type="button" className="loginButton" onClick= {(e)=>{handleFlag(value)}}  >Enter</button>
              
            </form>
          </div>)

        }
        const RemoveLog = (props) =>{
          return(
            <div></div>)
        };


        function Status(props){
          const noName = props.noName;
          console.log(noName)
          if(noName){
            return <Log />
          }
          return <RemoveLog />
          
        }

     
      
    return (  
             
              <div  className={onBlur ?  "Blur": "Planning-Poker-Main container-fluid flex-column"}>
                    <div className="unBlurred" >
                      <Status noName={noName} />  
                    </div>
                    <div className="NavBar">
                      <header className="d-flex Title">
                        <Logo className='hbLogo' room={room} name={name} />
                        
                        <div>
                        <ShareLink room={room} cardVal={cardVale}/>
                        <Hamburger chatT={chatT} setMessage={setMessage} room={room} name={name} sendMessage={sendMessage} message={message} messages={messages}/>
                       
                        </div>
                        </header>
                    </div>
                    
                    <div className="storyDes container">
                    
                        <StoryDescription socket={socket}/>
                    </div>
               
                    <div className="Cards">
                    <div className ="cardK">
                    {flag !== 1 ? (
                      hand.map((value, index) => (
                        <Card
                          key={value}
                          value={value}
                          onClick={() => removeCard(value)}
                        />
                      ))
                    ) : (
                      <Table
                      value={placed}
                      socket={socket}
                      usersnum={numberofuser}
                      goback = {goback}
                      />
                    )}
                    </div>
                    
                </div>
                
                   
              </div>
    );
}
 
export default Poker;
