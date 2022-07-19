import React from 'react';
import { Link } from "react-router-dom";
import { Navigation } from '../../components';
import { useAuth } from '../../context/authContext';
import "./Auth.css";

export const Logout = () => {

    const logoutHandler = () => {
        setLogin (false);
    }

    const { setLogin } = useAuth();

    return (
        <>
            <section>
                < Navigation />
            </section>
            <section className='logout-main-container'>
                <div className='logout-container'>
                    <section className="logout-avatar-section">
                        <img src="./assests/avatar.svg" alt="avatar" className='logout-avatar' />
                        <section>
                            <h3>Manoj Kumar</h3>
                            <p>manojkumar@gmail.com</p>
                        </section>
                    </section>
                    <Link to="/">
                        <button onClick={logoutHandler} className='logout-btn'>Logout</button>
                    </Link>
                </div>
            </section >
        </>
    )
}