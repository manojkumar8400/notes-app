import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import { Navigation } from "../../components/Navigation/Navigation";

const Signup = () => {

    return (
        <>
            <div>
                <Navigation />
            </div>
            <div className="login-main-container flex-center">
                <form className="log-container">
                    <div className="signup-container flex-column">
                        <h3 className="text-align mtb-16">Signup</h3>
                        <label className="txt">Email address</label>
                        <input className="email-input input" type="email" placeholder="abc@gmail.com" />
                        <div className="name">
                            <section>
                                <label className="txt">First name</label>
                                <input className="input width" type="text" placeholder="Enter First Name" />
                            </section>
                            <section>
                                <label className="txt">Last name</label>
                                <input className="input width" type="text" placeholder="Enter Last Name" />
                            </section>
                        </div>
                        <div className="name">
                            <section>
                                <label className="txt">Password</label>
                                <input className="input width" type="password" placeholder="Enter Password" />
                            </section>
                            <section>
                                <label className="txt">Confirm Password</label>
                                <input className="input width" type="password" placeholder="Confirm Password" /><br />
                            </section>
                        </div>
                        <label className="txt">
                            <input className="checkbox-input" type="checkbox" />
                            I accept all Terms & Conditions
                        </label>
                        <Link to="/">
                            <button className="create-btn mtb-16 w-100 ptb-8">
                                Create New Account
                            </button>
                        </Link>
                        <label className="text-align">Already a member?
                            <Link to="/login" className="color"><strong className="link-color"> Login</strong></Link>
                        </label>
                    </div>
                </form>
            </div>
        </>
    )
}

export { Signup }