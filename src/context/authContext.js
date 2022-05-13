import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

    const [login, setLogin ] = useState(false);

    return(
        <AuthContext.Provider value={{ login, setLogin }}>
            { children }
        </AuthContext.Provider>
    )
}

export { useAuth, AuthProvider };