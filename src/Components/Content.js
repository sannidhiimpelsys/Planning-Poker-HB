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

// Title
import dice from '../assets/Title/Group 58169.svg'
import planningTitle from '../assets/Title/PLANNING POKER.svg' 
import '../Components/content.css'


const  Content= () => {
   
    return (
         <div className="content" id ="contents"> 
               <div className="title ">
                  <div className="postioning">
                     <img id="Pointing-Poker-Text" src={planningTitle} alt="Title Pointing Poker" />
                     <img id="Pointing-Poker-Dice"  src={dice} alt="Dice Pointing Poker" />
                  </div>
               </div>
               {/* Cards here */}
               <div className="cards ">
                  <div id="cardHorizontal " className="CardH cardT">
                     <img src={Card1} alt="Card of ..." />
                     <img src={Card2}  alt="Card of ..."  />
                     <img src={Card3}  alt="Card of ..." />  
                  </div>
                  <div className="outerLogin">
                  <div id="cardVertical" >
                     <img src={Card7} className="cardV"alt="Card of ..." />
                     <img src={Card8} className="cardV" alt="Card of ..."  />
                  </div>
                  <div id='loginDivBlock' className="container">
                     <form >
                        <p id = "loginHead"> LOGIN </p>

                        <input className="Input1" type="text" placeholder="User ID" name="uname" required/>
                        <input className="Input2"type="password" placeholder="Room ID" name="psw" required/>
                        <button type="submit" className="loginButton" >Enter</button>
                     </form>
                    
                  </div>
                  <div id="cardVertical" >
                     <img src={Card9} className="cardV"alt="Card of ..." />
                     <img src={Card10} className="cardV" alt="Card of ..."  />
                  </div>
                  </div>
                  <div id="cardHorizontal " className="CardH cardB">
                     <img src={Card4} alt="Card of ..."   />
                     <img src={Card5} alt="Card of ..." />
                     <img src={Card6} alt="Card of ..."  />  
                  </div>
               </div>

      </div>
          
   
      );
}
 
export default Content;