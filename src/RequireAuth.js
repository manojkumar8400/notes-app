import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from "./context/authContext";

export const RequireAuth = () => {

    const { login } = useAuth();
    const location = useLocation();

    return (
        login ? (<Outlet />) : <Navigate to="/login" state={{ from: location }} replace />
    )
}
