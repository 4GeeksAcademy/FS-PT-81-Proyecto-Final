import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/newPost.css"



export const NewPost = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true
        const fetchPosts = async () => {
            await actions.getPosts();
            if (isMounted) setLoading(false);

        };
        fetchPosts();
        return () => {
            isMounted=false
        };
    }, []);


    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setLoading(true);
        try {
            let imageUrl = "";
            if (image) {
                imageUrl = await actions.uploadImg({image: image, title: title, body: body});
            }
            await actions.createPost(title, body, image);

            await actions.getPosts();
            navigate("/perfil");

        } catch (error) {
            console.error("error creando post:", error);
        } finally {
            setLoading(false);
        }


    };
    return (
        <div className="newPost-container">
            <h2 className="HistoriaViaje">Crea tu Histora de Viaje</h2>
            <form onSubmit={handleSubmit}>
                <label>Título:</label>
                <input type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <label >Descripción:</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)}
                    required
                />
                <label >imagen:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>{const file = e.target.files[0]; console.log("archivo de imagen", file); setImage(file)}}
                    required
                />
                <button className="butonupload" type="submit" disabled={loading}>
                    {loading ? "subiendo..." : "publicar"}
                </button>
            </form>
        </div >
    );
};
