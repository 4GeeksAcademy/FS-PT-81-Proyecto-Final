import React from "react";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navbar } from "../component/navbar"
import { Footer } from "./footer";


export const Registro = () => {
    const { store, actions } = useContext(Context);
    const [form, setForm] = useState({
        email: '',
        contraseña: ''
    });
    const handleSubmit = e => {
        e.preventDefault();
        actions.registro(form);

    };
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <br></br>
                <h2 className="titleregister mt-5">Registrate</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={form.contraseña}
                            onChange={(e) => setForm({ ...form, contraseña: e.target.value })}
                            required
                        />
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
               
            </div >
        </div>
    );
};