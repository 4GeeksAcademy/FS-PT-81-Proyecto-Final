import React from "react";
import {useContext, useState  } from "react";
import { Context } from "../store/appContext";
import { Navbar  } from "../component/navbar"


export const Registro = () => {
    const { store, actions } = useContext(Context);
    const[form, setForm] = useState ({
        email: '', 
        contraseña: ''
    });
    const handleSubmit = e => {
		e.preventDefault();
		actions.registro(form);

	};
    return(
        <div>
            <Navbar/>
        <form onSubmit={handleSubmit}>
            <h2>Registro</h2>
            <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm ({ ...form, email: e.target.value})}
            />
            <input
            type="contraseña"
            placeholder="Contraseña"
            value={form.contraseña}
            onChange={(e) => setForm({ ...form, contraseña: e.target.value})}
            />
            <button type="submit">Registrarse</button>
        </form>
        </div>
    );
};