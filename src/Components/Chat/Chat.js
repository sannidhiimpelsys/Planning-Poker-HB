

import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import "../Chat/Chat.css"

const Chat = (props) => {
  const room = props.room
  const messages = props.messages
  const message = props.message
  const setMessage = props.setMessage
  const sendMessage = props.sendMessage
  const name = props.name
  const chatT = props.chatT
console.log(chatT)
  return (
   
    <div  className="outerContainer">
      <div className="container ChatInner">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
    
  );
};

export default Chat;
