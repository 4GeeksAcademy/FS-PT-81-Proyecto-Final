import React from "react";
import '../../styles/login.css'



export const Login = ({ email, setEmail, password, setPassword, handleLogin }) => {

    return (
        <form className="bodylogin" onSubmit={handleLogin}>
            <div>
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail( e.target.value )}
                />
            </div>
            <div>
                <label>Contraseña</label>
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword( e.target.value)}
                />
                </div>
                <button type="submit">Iniciar Sesión</button>
        </form>
    );
};
