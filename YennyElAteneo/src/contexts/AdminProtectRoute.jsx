import { useAuth } from "./AuthContext";
import { Navigate } from "react-router-dom";

export default function AdminProtectedRoute( {children} ){

    const {is_logueado, is_admin} = useAuth();

    if( is_logueado && is_admin ){
        return children;
    }else{
        return <Navigate to="/error" />
    }

}