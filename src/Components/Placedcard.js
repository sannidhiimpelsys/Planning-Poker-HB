import './Table.css'
const Placedcard = ({ value, user}) => {
  
    return (
      
        <div className="placedcard">
        <div className="value">{value}</div>
        <div className="user-name">
        {user.name}
        </div>
      </div>
      
    );
  };
  
  export default Placedcard;
  