import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../../styles/login.css'

export const LoginVista = () => {
    const { store, actions, } = useContext(Context);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        if (store.currentUser) {
            navigate("/Perfil");
        }
    }, [store.currentUser, navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            console.error("debe ingresar e,ail y contraseña");
            return;
        }
        const succes = actions.loginUser({ email, password }, navigate);
        if (succes) {
            console.log("Sesion iniciada, redirigiendo.....");
            navigate("/perfil");
        } else {
            console.error("Error iniciando sesion", store.error);
        }
    };

    return (
        <div className="bodygeneral">
            <div className="bodylogin">
                <h1 className="titlelogin">Iniciar Sesión</h1>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Email  </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div>
                        <label>Contraseña </label>
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>
                </form>
                <button onClick={handleLogin} type="submit">Iniciar Sesión</button>
                <div>
                    <Link to="/recuperar-contrasena">¿Olvidaste tu Contraseña?</Link>
                </div>


            </div>
        </div>
    );
};

