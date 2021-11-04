/*import Popup from "../invite/popup";*/
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState, useEffect } from "react";
import "./Sharelink.css";

function ShareLink() {
  /* const prom = new Promise();*/
  /* setTimeout(() => {
    const myURL = new URL(window.location.href);
    console.log(myURL.searchParams.get("name"));
  }, 2000);*/

  const [k, sk] = useState("");
  useEffect(() => {
    /*var myURL = window.location.href;
    alert(myURL.searchParams.("name"));*/
    const queryParams = new URLSearchParams(window.location.search);
    const cal = queryParams.get("cardVale");
      // const name = queryParams.get("name");
    const type = queryParams.get("room");
    const linkz = window.location.href.slice(0,window.location.href.lastIndexOf('/'));

    var kite =
      linkz + "/poker?name=&room=" + type + "&cardVale=" + cal;
    // queryParams.set(name, "eafesf")
    
    sk(kite);
  }, []);
  /*const offset = {
    left: 150,
    top: 50,
  };*/
  return (
    <div className="Share">
      
      <Popup
        trigger={<button className="invitebutton"> Invite Link</button>}
        /* offset={offset}*/
      >
        <div className="pop">{k}</div>
      </Popup>
    </div>
  );
}

export default ShareLink;