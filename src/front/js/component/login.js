import React from "react";
import '../../styles/login.css'



export const Login = ({ email, setEmail, password, setPassword, handleLogin }) => {

    return (
        <div>
            <h2>Iniciar Sesión</h2>
            <form className="bodylogin" onSubmit={handleLogin}>
                <div>
                    <label>Email  </label>
                    <input
                        type="email"
                        value="email"
                        onChange={(e) => setEmail(e.target.value)}
                        requiered
                    />
                </div>
                <div>
                    <label>Contraseña </label>
                    <input
                        type="password"
                        value="password"
                        onChange={(e) => setPassword(e.target.value)}
                        requiered
                    />
                </div>
            </form>
            <button type="submit">Iniciar Sesión</button>
        </div>
    );
};
