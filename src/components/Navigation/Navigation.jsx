import React from 'react';
import "./Navigation.css";
import { Link } from 'react-router-dom';
import { useTheme } from "../../context/themeContext";

const Navigation = () => {

    const { theme, setTheme } = useTheme();

    return (
        <>
            <nav className="nav-bar flex jstfy-ctnt-spc-between position-sticky z-index">
                <div className='logo-design flex-column'>
                    <Link to="/" className="logo"><span> Notejoy </span></Link>
                </div>
                <section className="side-nav-section flex jstfy-ctnt-spc-between align-itm-center">
                    <Link to="/login">
                        <button className="login-btn">👤</button>
                    </Link>
                    <button onClick={() => {
                        setTheme(theme === "light" ? "dark" : "light");
                    }} className="theme-btn">
                        {theme === 'light' ? <img className="theme-mode-icon moon-logo" src="./assests/moon.svg" alt="night mode" /> : <img className="theme-mode-icon sun-logo" src="./assests/sunny.svg" alt="night mode" />}
                    </button>
                </section>
            </nav>
        </>
    )
}

export { Navigation }
