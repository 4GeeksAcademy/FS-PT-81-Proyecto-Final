import React, { useState, useEffect } from "react";
import '../../styles/destinos_ciudades.css';

export const CommentBox = () => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]); // Lista de comentarios
    const token = localStorage.getItem("token"); 

    // Cargar comentarios guardados al montar el componente
    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
        setComments(storedComments);
    }, []);

    // Guardar comentarios en localStorage cada vez que cambien
    useEffect(() => {
        localStorage.setItem("comments", JSON.stringify(comments));
    }, [comments]);

    const handleChange = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() === "") return; // Evitar comentarios vacíos

        // Guardar el comentario con un ID y la fecha
        const newComment = { id: Date.now(), text: comment };
        setComments([...comments, newComment]);
        setComment(""); // Limpiar el campo después de enviar
    };

    return (
        <div className="comment-box">
            <div>
                <h4>Comentarios...</h4>
            </div>

            {/* Mostrar los comentarios guardados */}
            <div className="comments-list">
                {comments.length > 0 ? (
                    comments.map((c) => (
                        <div key={c.id} className="comment-item">
                            <p>{c.text}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay comentarios aún.</p>
                )}
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
