import React from "react";
import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Logout = () => {
    const { actions } = useContext(Context);
    return(
        <button onClick={actions.logout}>Cerrar Sesión</button>
    );

};