import React from 'react';



import './InfoBar.css';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
    <h3 className="textMes">Messages</h3>
      
     
    </div>
    <div className="rightInnerContainer">
      <i  className="slide">x</i>
    </div>
  </div>
);

export default InfoBar;