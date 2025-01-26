import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link  } from "react-router-dom";
import '../../styles/login.css'

export const LoginVista = () => {
    const { store, actions, } = useContext(Context);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const navigate = useNavigate();
    const validUser = email === "" && password === "";
    if (validUser) {
        navigate("/Perfil");
    };

const handleLogin = (e) => {
    e.preventDefault();
    actions.loginUser({ email, password }, navigate);
    setCredentials({
        ...credentials, [e.target.name]: e.target.value,
    });
};

return (
    <div className="bodylogin">
        <h2 classname="titlelogin" mb-5 mt-5>Iniciar Sesión</h2>

        <form onSubmit={handleLogin}>
            <div>
                <label>Email  </label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    requiered
                />
            </div>
            <div>
                <label>Contraseña </label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    requiered
                />
            </div>
        </form>
        <button type="submit">Iniciar Sesión</button>
        <div>
            <Link to="recuperar-Contrasena">¿Olvidaste tu Contraseña?</Link>
        </div>
        


    </div>
);
};

