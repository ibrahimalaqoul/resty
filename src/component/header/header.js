import React from 'react';
import { Link } from "react-router-dom";
import "./header.scss"

function Header() {
    return (
        <div class="header" >
            <h1 id='title'>
                RESTy
            </h1>
            <div className='nav'>
                <ul>
                    <li> <Link to="/">Home</Link></li>
                    <li><Link to="/History">History</Link></li>
                    <li><Link to="/Help">Help</Link></li>

                </ul>
            </div>
        </div>
    );
}
export default Header;