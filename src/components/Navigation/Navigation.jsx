import React from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';

const Navigation = () => {

    const { login } = useAuth();

    return (
        <>
            <nav className="nav-bar flex jstfy-ctnt-spc-between position-sticky z-index">
                <div className='logo-design flex-column'>
                    <Link to="/" className="logo"><span> Notejoy </span></Link>
                </div>
                <section className="side-nav-section flex jstfy-ctnt-spc-around align-itm-center">
                    <Link to={`${login ? "/logout" : "/login"}`}>
                        <button className="login-btn"><span className="material-icons f-size-32">person</span></button>
                    </Link>
                </section>
            </nav>
        </>
    )
}

export { Navigation }
