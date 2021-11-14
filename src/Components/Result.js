
const Result = (props) => {
    const finalinputs = props.valuelist.filter((e) => e !== '?')
    var total =0;
    var count = 0;
    finalinputs.forEach(element => {
        total+=parseInt(element);
        count++;
    });
    
    return (
      <div className="result">
          <p className="outcome">The result is : {Math.ceil(total/count)}</p>
          <button className="send" onClick={props.goback}>Go Back</button>
      </div>
    );
  };
  
  export default Result;