import React from "react";
import './header.css';
import Logo from "../assets/Logo/HB-Logo.png";
const Header = () =>{
//    const onex = './assets/Logo/HB-Logo.png';
//    const twox = './assets/Logo/HB-Logo@2x.png';
    return(
    <header>
        <div className="site-logo container">
            <img src={Logo} srcSet={`${require('../assets/Logo/HB-Logo.png')} 1x,
            ${require('../assets/Logo/HB-Logo@2x.png')} 2x`} alt="logserfgo" />
        </div>

    </header>
    )
}

export default Header;