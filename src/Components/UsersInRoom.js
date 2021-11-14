
// import onlineIcon from '../../icons/onlineIcon.png';
import ScrollToBottom from 'react-scroll-to-bottom';
import './UsersInRoom.css'
const UsersInRoom = ({ users, onClick }) => {
   
    return ( 
    <div className="dropdown heightd">
        <button className="btn dropdown-toggle userbutton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false" onClick={onClick}>
            Users In Room
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                users
                    ? (
                        <div className="HeightD">
                        <div className="dropdown-item">
                            <ScrollToBottom className="items">
                                <div>
                            {users.map(({name}) => (
                                <div key={name} className="namesx d-flex">
                                    {name}
                               </div>
                                ))}
                                </div>
                        </ScrollToBottom>
                        </div>
                        </div>
                    )
                    : null
                }
            
        </div>        
    </div>
    );
}
 
export default UsersInRoom;