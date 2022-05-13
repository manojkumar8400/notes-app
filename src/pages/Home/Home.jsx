import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
    return (
        <div className="home-main-container flex jstfy-ctnt-center">
            <div className="home-container grid jstfy-ctnt-spc-around align-itm-center">
                <div className="txt-container grid">
                    <h1>Notejoy</h1>
                    <h3>Meet Your Modern Note Taking App</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem vero atque porro sapiente eum corrupti
                        consequatur culpa soluta, optio, explicabo id nostrum ad quasi aut, dicta voluptas adipisci voluptatem
                        doloremque!
                    </p>
                    <Link to="/text-editor">
                        <button className="join-btn">Join Now</button>
                    </Link>
                    <Link to="/text-editor">Join as a Guest</Link>
                </div>
                <img className="home-img" src="/assests/home-img.svg" alt="home image" />
            </div>
        </div>
    )
}
export { Home } 