import React, { useState } from "react";
import '../../styles/destinos_ciudades.css';

export const CommentBox = () => {
    const [comment, setComment] = useState("");
    const token = localStorage.getItem("token"); 

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Comentario enviado: ${comment}`);
        setComment("");
    };

    return (
        <div className="comment-box">
            <div>
                <h4>Comentarios...</h4>
            </div>

        
            {token ? (
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="comment"
                        value={comment}
                        onChange={handleChange}
                        placeholder="Escribe tu comentario aquí..."
                        rows="4"
                        cols="50"
                    />
                    <br />
                    <button className="send-comment" type="submit">
                        Enviar
                    </button>
                </form>
            ) : (
                
                <p>
                    <strong>Para comentar, necesitas una cuenta.</strong>  
                    <br />
                    <a href="/login" style={{ marginRight: "10px" }}>Inicia sesión</a> o  
                    <a href="/registro">Regístrate</a>
                </p>
            )}
        </div>
    );
};
