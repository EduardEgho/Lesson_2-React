import React from 'react';
import {NavLink} from "react-router-dom";

const activeLink = ({isActive}) =>(isActive ? 'active-link' : '')

function NavBar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={'/form'} className={activeLink}>Form</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/'} className={activeLink}>Posts</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;














