/* eslint-disable no-unused-vars */
import lineRed from '../assets/Lines/Rectangle 4216.svg'
import blockBlack from '../assets/Lines/Rectangle 4215.svg'
import dice from '../assets/Title/Group 58169.svg'
import planningTitle from '../assets/Title/PLANNING POKER.svg' 
const  Content= () => {
    
    return (
       <div className="content"> 
        <img className="redLine" src={lineRed}  alt="side-block" width="100%" height="300.86"/> 
         <div className="Title">
               
            <img className="Block-Background" src={blockBlack} alt="Block-background"/>
            <img className="Pointing-Poker-Text" src={planningTitle} alt="Title Pointing Poker" />
         </div>
         <img className="redLine" src={lineRed}  alt="side-block" width="100%" height="300.86"/> 
        </div>
      );
}
 
export default Content;