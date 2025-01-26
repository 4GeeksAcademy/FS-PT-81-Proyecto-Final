import React, { useState} from "react";
import '../../styles/login.css'

export const RecuperacionContraseña = () =>  {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert (`Se ha enviado un enlace al correo para recuperar la contraseña al correo:${email}`);
    };
    return(
        <div className="bodylogin">
            <h2 className="titlelogin">Recuperació de Contraseña</h2>
            <form onSubmit={handleSubmit}>
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