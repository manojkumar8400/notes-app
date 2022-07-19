import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Auth.css";
import { Navigation } from "../../components/Navigation/Navigation";
import { useAuth } from "../../context/authContext";

const Login = () => {

    const { login, setLogin } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [hidden, setHidden] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div>
                <Navigation />
            </div>
            <form onSubmit={e => e.preventDefault()} className="login-main-container flex-column jstfy-ctnt-center align-itm-center">
                <div className="login-container">
                    <h3 className="text-align">Login</h3>
                    <section className="flex-column">
                        <label htmlFor="/">Email address
                            <input
                                className="user-input"
                                type="email"
                                placeholder="abc@gmail.com"
                                defaultValue={hidden ? "adarshbalika@gmail.com" : ""} />
                        </label>
                        <label htmlFor="/" className="relative">Password
                            <input className="pass-input" type={showPassword ? "text" : "password"} placeholder="*************" defaultValue={hidden ? "1234adarsh" : ""} />
                            {
                                showPassword
                                    ? <span onClick={() => { setShowPassword(showPassword ? false : true) }} className="material-icons absolute visibility-style">visibility</span>
                                    : <span onClick={() => { setShowPassword(showPassword ? false : true) }} className="material-icons absolute visibility-style">visibility_off</span>

                            }
                        </label>

                    </section>
                    <section className="flex jstfy-ctnt-spc-between">
                        <label htmlFor="remember">
                            <input className="checkbox-inpt" id="remember" type="checkbox" />
                            Remember me
                        </label>
                    </section>
                    <button onClick={() => {
                        setHidden(true)
                        setLogin(!login);
                        navigate(location.state.from.pathname);
                    }} className="create-btn submit-btn w-100 ptb-8">Login as a Guest</button>
                    <Link className="link-color block text-align" to="/Signup">Create New Account</Link>
                </div>
            </form>
        </>
    )
}

export { Login }