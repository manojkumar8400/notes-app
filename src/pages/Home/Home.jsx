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
                    <p>
                        This is a note-taking app, in this app, you can keep notes of your essential work and daily schedule.
                    </p>
                    <Link to="/text-editor">
                        <button className="join-btn">Join Now</button>
                    </Link>
                </div>
                <img className="home-img" src="/assests/home-img.svg" alt="home image" />
            </div>
        </div>
    )
}
export { Home } 