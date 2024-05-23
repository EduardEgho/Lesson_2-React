import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../components/NavBar.jsx";

function Layout() {
    return (
        <div className='App'>
            <header><NavBar/></header>
            <main><Outlet/></main>
            <p>
                <footer>Hello Wold</footer>
            </p>

        </div>
    );
}

export default Layout;