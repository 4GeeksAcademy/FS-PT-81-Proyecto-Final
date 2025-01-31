import React, { useState} from "react";

export const CommentBox = () => {
    const [comment, setComment] = useState("");

    const handleChange =(event) =>{
        setComment(event.target.value);
    };
    
    const handleSubmit = (e) => {
        e.prevent.Default();
        alert(`Comentario enviado : ${comment}`);
        setComment("");

    };

    return(
        <div className= "comment-box">
            <div>
                <h4>Comentarios...</h4>
            </div>
            <formSubmit onSubmit={handleSubmit}>
                <textarea className="comment"
                value={comment}
                onChange={handleChange}
                placeholder="Escribe tu comentario aquí..."
                rows="4"
                cols="50" />
                <br />
                <button className="send-comment"
                type="submit">
                    Enviar

                </button>
            </formSubmit>
        </div>
    )
}