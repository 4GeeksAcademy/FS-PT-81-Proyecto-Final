import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import '../../styles/formularioRegistro.css'



export const Registro = () => {
    const { store, actions, } = useContext(Context);
    const navigate = useNavigate();
    const [form, setForm] = useState({
       username:"",
        email: "",
        contraseña: "",
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
       await actions.registro(form, navigate);
     };
    return (
        <div>
            <div className="bodyregister mt-5">
                <h2 className="titleregister mt-5">Registrate</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label className="labelname">Name</label>
                        <input className="inputname"
                            type="name"
                            placeholder="Nombre"
                            value={form.username}
                            onChange={(e) => setForm({ form, username: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="emaillabel">Email</label>
                        <input className="inputemail"
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={(e) => setForm({ form, email: e.target.value })}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="contralabel">Contraseña</label>
                        <input className="inputcontra"
                            type="password"
                            placeholder="Contraseña"
                            value={form.password}
                            onChange={(e) => setForm({form, password: e.target.value })}
                            required
                        />
                    </div>
                    <button className="butonregister" type="submit">Registrarse</button>
                </form>
              {store.error && <p className="mensaje de error">{store.error}</p>} 
            </div >
        </div>
    );
};