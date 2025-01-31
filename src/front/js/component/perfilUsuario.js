import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import '../../styles/perfilUsuario.css'
import { Logout } from "./logout";



export const PerfilUsuario = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        if(store.currentUser){
            SetUser(store.currentUser);
        }else{
            const salvaUser = localStorage.getItem("user");
            if (salvaUser) SetUser (JSON.parse(salvaUser));
        }
    }, [store.currentUser]);

    return (
        <div className="perfil-container">
            { user ? (
                <>
               <h1 className="bienbenida">
                            Bienvenido, {user.username}
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

