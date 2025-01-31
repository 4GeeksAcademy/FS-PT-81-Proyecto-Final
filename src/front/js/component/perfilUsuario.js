import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import '../../styles/perfilUsuario.css'
import { Logout } from "./logout";



export const PerfilUsuario = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    useEffect(() => {
     !localStorage.getItem("token") && navigate("/") 
    }, []);

    return (
        <div className="perfil-container">
            { store.user ? (
                <>
               <h1 className="bienbenida">
                            Bienvenido, {store.user?.username}
                        </h1>
                        <p className="exploraPerfil">Explora los puntos de interés y tus destinos favoritos</p>
                    </>
                ) : ( 
                    <p> Cargando los datos....</p>
                )}
                <Logout/>
        </div>
    );
};

