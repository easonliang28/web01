import React from 'react';
import '../css/NaviBar.css';
import {Link} from "react-router-dom";
import logosmall from "../logo_small.svg";
function NaviBar() {
    return(
        <React.StrictMode>
            <div id='navi-container' className="noSelect">
                <div className="navi-content"><Link to="/"><img src={logosmall} alt="ATRPCOS" className="logo-img"></img></Link></div>
                <div className="navi-content"><Link to="/Product">Product</Link></div>
                <div className="navi-content"><Link to="/News">News</Link></div>
                <div className="navi-content"><Link to="/Login">Login</Link></div>
            </div>
            <div id="navi-under"></div>
        </React.StrictMode>
    );

}
export default NaviBar;