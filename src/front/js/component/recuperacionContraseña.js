import React, { useState } from "react";
import '../../styles/login.css'

export const RecuperacionContraseña = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Se ha enviado un enlace al correo para recuperar la contraseña al correo:${email}`);
    };
    return (
        <div className="bodygeneral">
            <form className="bodylogin" onSubmit={handleSubmit}>
                <h2 className="titlelogin">Recupera tu Contraseña</h2>
                <div>
                    <label>Ingresa tu Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};