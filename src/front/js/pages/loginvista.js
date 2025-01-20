import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../component/login";

export const LoginVista = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "usuario@hotmail.com" && password === "123456") {
            alert("Inicio de sesión");
            navigate("/vistaPerfil");
        } else {
            alert("Credenciales incorrectas")
        }
    };
    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
            />

        </div>
    );
};
