import React from "react";
import { useNavigate } from 'react-router-dom';
import * as Stl from './styled.js';
export const Header = () => {

    const navigate = useNavigate();

    const goToLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <div>
            <Stl.Logout onClick={() => goToLogout()}>Logout para testar o token que fica gravado</Stl.Logout>
        </div>
    )

}