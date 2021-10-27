import './poker.css'

const Card = ({ value, onClick }) => {
  return (
    <div className="cardBox" onClick={onClick}>
      <div className="values">{value}</div>
    </div>
  );
};

export default Card;
