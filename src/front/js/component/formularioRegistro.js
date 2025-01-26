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
        password: "",
    });
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           await actions.createUser(form,navigate); 
           navigate("/login");
        } catch (error) {
            console.error("Error al registrar el usuario", error)
            
        }
     };
    return (
        <div>
            <div className="bodyregister mt-5">
                <h2 className="titleregister mt-5">Registrate</h2>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label className="labelname">Name</label>
                        <input className="inputname"
                            type="text"
                            name="username"
                            placeholder="Nombre"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="emaillabel">Email</label>
                        <input className="inputemail"
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="contralabel">Contraseña</label>
                        <input className="inputcontra"
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={form.password}
                            onChange={handleChange}
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