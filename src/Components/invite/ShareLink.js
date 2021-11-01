import Popup from "../invite/popup";

function ShareLink () {
    const prom = new Promise    
    setTimeout(() => {
        const myURL = new URL(window.location.href);
        console.log(myURL.searchParams.get("name"))
    }, 2000)
    
    return ( 
    <div>
        <button>Invite Players</button>
        
    </div>
 );
}
 
export default ShareLink;