/* eslint-disable no-unused-vars */
import lineRed from '../assets/Lines/Rectangle 4216.svg'
import blockBlack from '../assets/Lines/Rectangle 4215.svg'
import dice from '../assets/Title/Group 58169.svg'
import planningTitle from '../assets/Title/PLANNING POKER.svg' 
import '../Components/content.css'

const  Content= () => {
    
    return (
       <div>
       <div className="contents"> 
          <img className="Pointing-Poker-Text" src={planningTitle} alt="Title Pointing Poker" />
          <img className="Pointing-Poker-Dice" src={dice} alt="Dice Pointing Poker" />
          
          <div className="loginDivBlock">
            <p className = "loginHead"> LOGIN </p>
           
            <input type="text" placeholder="Username" name="uname" required/>
            
            <input type="password" placeholder="Room ID" name="psw" required/>
            <button type="submit" className="loginButton" >Enter</button>

         </div>
            </div>
           
         
         </div>
          
   
      );
}
 
export default Content;