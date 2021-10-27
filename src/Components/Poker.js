/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import io from 'socket.io-client';
import queryString from 'query-string';
import Logo from './Logo';
import ShareLink from './ShareLink';
import Chat from '../Components/Chat/Chat';
import StoryDescription from './StoryDescription';
import './poker.css'
import { Link } from "react-router-dom"
import Card from './Card';
import Table from "./Table";


const socket = io.connect("http://localhost:3001");
var chooseTime=0;

var series =""
var cardVales =""
var value ="";
const Poker = () => {
  
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

    useEffect ( () => {
        var {name , room, cardVale} = queryString.parse(location.search);
        
       
        setRoom(room);
       
       
        setName(name);
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
          e.preventDefault()
          setOn(!on)
          
        }
        console.log(window.location.href)
        function setnames(value) {
          setName(value)
        }
        const Log = (props) => { 

          return(
          <div className={on ? "off" : null} id='name'>
            <form action="form.html" method="POST"  >
              <input type="text" name="sda" id="asd" placeholder="Enter name"  value={name}
              onChange={({ target: { value } }) => setName(value)}  required/>


              <Link onClick={e => (!name) ?  handleFlag(e) : null} to={`/poker?name=${name}&room=${room}&cardVale=${series}`}>
                
                <button type="submit" className="loginButton" onClick= {(e)=>{value = e.target.value; setnames(value);setFlag(true)}} >Enter</button>
              </Link>
            </form>
          </div>)

        }
        const RemoveLog = (props) =>{
          return(
            <div></div>)
        };


        function Status(props){
          const flag = props.flag;
          if(flag){
            return <RemoveLog />
          }
          return <Log />
        }

     
      
    return (  
             
              <div  className="Planning-Poker-Main container-fluid flex-column">
                    {/* <Status flag={states} />   */}
                    {/* <NameSet /> */}
                    
                    <div className="NavBar">
                      <header className="d-flex Title">
                        <Logo className='hbLogo' room={room} name={name} />
                        
                        <div>
                        <ShareLink room={room} cardVal={cardVale}/>
                        <button   >Transition</button>
                        </div>
                        </header>
                    </div>
                    <Chat chatT={chatT} setMessage={setMessage} room={room} name={name} sendMessage={sendMessage} message={message} messages={messages} />
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
