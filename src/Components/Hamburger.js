import "./Hamburger.css"
import React from "react";
import styled from 'styled-components';
import Chat from '../Components/Chat/Chat';

const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
background: #EFFFFA;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
height: 100vh;
text-align: left;
margin-left:900px;
position: absolute;

top: 0;
right: 0;
transition: transform 0.3s ease-in-out;

@media (max-width: 576px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: #343078;
  }
}
`

const Menu = ({ open, setMessage, room, name, sendMessage, message, messages}) => {
  return (
    <div className={open ? "Hide" : "NotHide"}>
    <StyledMenu open={open}>
     <Chat  setMessage={setMessage} room={room} name={name} sendMessage={sendMessage} message={message} messages={messages} />
    </StyledMenu>
    </div>
  )
}


const StyledBurger = styled.button`
position: absolute;
top: 5%;
right: 2rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2.5rem;
border: 4px solid #C10E21;
border-radius: 5px;
cursor: pointer;
padding: 0;
z-index: 10;

&:focus {
  outline: none;
}
.burger.part3{
  width:40% ;
}
.burger {
  width: 1rem;
  height: 0.25rem;
  background: ${({ open }) => open ? '#C10E21' : '#C10E21'};
  border-radius: 10px;
  transition: all 0.3s linear;
  position: relative;
  transform-origin: 1px;

  :first-child {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    width: ${({ open }) => open ? '120%': '80%'};
    margin-left:8%;
    margin-top:10%;
  }

  :nth-child(2) {
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    width: 80%;
    margin-left:8%;
  }

  :nth-child(3) {
    transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    width: ${({ open }) => open ? '120%': '40%'} !important;
    background: ${({ open }) => open ? '#C10E21': '#C10E21'};
    
    margin-left:8%;
    margin-bottom:10%;
   

  }
  
}
`

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div className="burger"/>
      <div className="burger"/>
      <div className="burger part3"/>
     
    </StyledBurger>
  )
}


const Hamburger = (props) => {
  const room = props.room
  const messages = props.messages
  const message = props.message
  const setMessage = props.setMessage
  const sendMessage = props.sendMessage
  const name = props.name
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  return (
    <div>

      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} setMessage={setMessage} room={room} name={name} sendMessage={sendMessage} message={message} messages={messages}/>
      </div>
    </div>
  )  
}

export default Hamburger


