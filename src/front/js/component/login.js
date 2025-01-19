import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import '../../styles/login.css'



export const Login = () => {

    const { store, actions } = useContext(Context);
    const [form, setForm] = useState({
        email: '',
        contraseña: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        actions.login(form);

    };
    return (
        <div mb-5>
            <br></br>
            <form className="bodylogin" onSubmit={handleSubmit}>
                <h2 className="titlelogin">Iniciar Sesión</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                    type="contraseña"
                    placeholder="Contraseña"
                    value={form.contraseña}
                    onChange={(e) => setForm({ ...form, contraseña: e.target.value })}
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
};
