import React from "react";
import { useNavigate } from "react-router-dom";
import {Navbar  } from "../component/navbar";
import '../../styles/perfilUsuario.css'



export const PerfilUsuario = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate ("/");
    };

    return (
<div>
    <Navbar/>
    <main style={{marginTop: "60px", padding: "20ox"}}>
        <h1 className="bienbenida">Bienvenido, {PerfilUsuario.name}</h1>
        <p className="exploraPerfil">Explora los puntos de interés y tus destinos favoritos</p>
    </main>
</div>
    );
};

