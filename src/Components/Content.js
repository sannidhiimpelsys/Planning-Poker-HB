/* eslint-disable no-unused-vars */
// Cards
import Card1 from '../assets/Cards/Horizontal/Group 7094.svg'
import Card2 from '../assets/Cards/Horizontal/Group 9379.svg'
import Card3 from '../assets/Cards/Horizontal/Group 9006.svg'
import Card4 from '../assets/Cards/Horizontal/Group 18155.svg'
import Card5 from '../assets/Cards/Horizontal/Group 14790.svg' 
import Card6 from '../assets/Cards/Horizontal/Group 58162.svg'

import Card7 from '../assets/Cards/Vertical/Group 31141.svg'
import Card8 from '../assets/Cards/Vertical/Group 28237.svg'
import Card9 from '../assets/Cards/Vertical/Group 7422.svg' 
import Card10 from '../assets/Cards/Vertical/Group 21173.svg'
import React, { useState } from 'react'
import { Link } from "react-router-dom"
// Title

import planningTitle from '../assets/Title/Group 58173.svg' 
import '../Components/content.css'


const  Content= () => {
      const [name, setName] = useState('');
      const [room, setRoom] = useState('');
    return (
         <div className="content" id ="contents"> 
               <div className="title ">
                  <div className="postioning">
                     <img id="Pointing-Poker-Text" src={planningTitle} alt="Title Text Pointing Poker" />
                    
                  </div>
               </div>
               {/* Cards here */}
               <div className="cards ">
                  <div id="cardHorizontal " className="CardH cardT">
                     <img src={Card1} alt="poker card 1" />
                     <img src={Card2}  alt="poker card 2"  />
                     <img src={Card3}  alt="poker card 3" />  
                  </div>
                  <div className="outerLogin">
                  <div id="cardVertical" >
                     <img src={Card7} className="cardV" alt="poker card 4" />
                     <img src={Card8} className="cardV" alt="poker card 5"  />
                  </div>
                  <div id='loginDivBlock' className="Login">
                     <form action="form.html" method="post" >
                        <p id = "loginHead"> LOGIN </p>

                        <input className="Input1" type="text" placeholder="User ID" name="uname" required onChange={(event) =>setName(event.target.value)}/>

                        <input className="Input2"type="password" placeholder="Room ID" name="psw" required onChange={(event) =>setRoom(event.target.value)}/>

                        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/poker?name=${name}&room=${room}`}>
                        <button type="submit" className="loginButton" >Enter</button>
                        </Link>
                     </form>
                    
                  </div>
                  <div id="cardVertical" >
                     <img src={Card9} className="cardV"alt="poker card 6" />
                     <img src={Card10} className="cardV" alt="poker card 7"  />
                  </div>
                  </div>
                  <div id="cardHorizontal " className="CardH cardB">
                     <img src={Card4} alt="poker card 8"   />
                     <img src={Card5} alt="poker card 9" />
                     <img src={Card6} alt="poker card 10"  />  
                  </div>
               </div>

      </div>
          
   
      );
}
 
export default Content;