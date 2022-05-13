import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from "./context/authContext";

export const RequireAuth = ({ children }) => {

    const { login } = useAuth();
    const location = useLocation();

    return (
        login ? (children) : <Navigate to="/login" state={{ from: location }} replace />
    )
}
