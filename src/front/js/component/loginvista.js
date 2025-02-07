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
            navigate("/perfil");
        }
    }, [store.currentUser, navigate]);

    const handleLogin =  async (e) => {
        e.preventDefault();
        if (!email || !password) {
            console.error("debe ingresar email y contraseña");
            return;
        }
        const succes =  actions.loginUser({email, password });
        if (succes) {
            console.log("Sesion iniciada, redirigiendo.....");
            setTimeout(() => {navigate("/perfil");
        }, 100); 
    } else {
            console.error("Error iniciando sesion", store.error);
        }
    };

    return (
        <div className="bodygeneral">
            <div className="bodylogin">
                <h1 className="titlelogin">Iniciar Sesión</h1>
                <form className="cuadro"onSubmit={handleLogin}>
                    <div className="emailInicio">
                        <label>Email  </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div className="contraseñaInicio">
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
                <div className="contraseña">
                    <Link to="/recuperar-contrasena">¿Olvidaste tu Contraseña?</Link>
                </div>


            </div>
        </div>
    );
};

