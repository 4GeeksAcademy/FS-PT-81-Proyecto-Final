import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";



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
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
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
            <footer className="footer text-center" style={{ backgroundColor: "#32C8D9" }}>
                <span className="nocuenta">Aun no tienes cuenta de TripGeeks?</span>
                <button>Registrate</button>
                <p className="textFooter">
                    TripGeeks<i className="fa-solid fa-copyright" />
                    <a href="http://www.4geeksacademy.com"></a>
                </p>
            </footer>
        </div>
    );
};
