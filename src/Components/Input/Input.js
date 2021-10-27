import React from "react";

import "../Input/Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  
  <form className="form">
   
    <div className='inputDiv' >
      <textarea
      id="inputs"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    </div>
    <div>
    <button className="chatButton" onClick={(e) => sendMessage(e)}>
      Enter
    </button>
    </div>
   
  </form>

);

export default Input;
