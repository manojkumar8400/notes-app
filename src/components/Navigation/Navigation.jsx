import React from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';

const Navigation = () => {


    return (
        <>
            <nav className="nav-bar flex jstfy-ctnt-spc-between position-sticky z-index">
                <div className='logo-design flex flex-direction-column'>
                    <Link to="/" className="logo"><span> Notejoy </span></Link>
                <div className='logo-design flex'>
                    <Link to="/" className="logo"><span>Notejoy</span> </Link>
                </div>
                <ul className="side-nav-section flex jstfy-ctnt-spc-between align-itm-center">
                    <Link to="/Login">
                        <li className="login-btn">👤</li>
                    </Link>
                    <li className="darkmode-btn btn"><img className='darkmode-img' src="https://cdn-icons.flaticon.com/png/128/4489/premium/4489231.png?token=exp=1649734041~hmac=f180853bb021e7917ec79aa2b7a43804" alt="dark mode" /></li>
                </ul>
            </nav>
        </>
    )
}

export { Navigation }
