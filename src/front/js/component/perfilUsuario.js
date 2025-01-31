import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../component/navbar";
import '../../styles/perfilUsuario.css'
import { Logout } from "./logout";



export const PerfilUsuario = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getPerfilUsuario();
    }, []);

    return (
        <div>
            <Navbar />
            <Logout />
            <main style={{ marginTop: "60px", padding: "20ox" }}>
                {store.perfilUsuario ? (
                    <>
                        <h1 className="bienbenida">
                            Bienvenido, {store.perfilUsuario.name}
                        </h1>
                        <p className="exploraPerfil">Explora los puntos de interés y tus destinos favoritos</p>
                    </>
                ) : ( 
                    <p> Cargando los datos....</p>
                )}
            </main>
        </div>
    );
};

