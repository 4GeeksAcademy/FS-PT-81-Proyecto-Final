import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaPencilAlt, FaTrash } from "react-icons/fa";
import "../../styles/perfilUsuario.css";










export const PerfilUsuario = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [editPostForm, setEditPostForm] = useState(null);
    useEffect(() => {
        actions.getPosts();
        if (!localStorage.getItem("token")) navigate("/");
    }, []);
    const handleEditClick = (post) => {
        setEditPostForm({
            id: post.id,
            title: post.title,
            description: post.description,
        });
    };
    return (
        <div className="perfil-container">
            <div className="feed">
                {store.posts.length > 0 ? (
                    store.posts.map((post) => (
                        <div key={post.id} className="bodypost">
                            <h3 className="titulopost">{post.title}</h3>
                            <p className="description-post">{post.body}</p>
                            {post.image && <img src={post.image} alt="post" />}
                            {editPostForm && editPostForm.id === post.id ? (
                                <form onSubmit={(e) => actions.handleEditPost(e, editPostForm, setEditPostForm)}>
                                    <input
                                        type="text"
                                        placeholder="Título"
                                        value={editPostForm.title}
                                        onChange={(e) => setEditPostForm((prev) => ({ ...prev, title: e.target.value }))}
                                        required
                                    />
                                    <textarea
                                        placeholder="Descripción"
                                        value={editPostForm.description}
                                        onChange={(e) => setEditPostForm((prev) => ({ ...prev, description: e.target.value }))}
                                        required
                                    />
                                    <button type="submit">Guardar</button>
                                    <button type="button" onClick={() => setEditPostForm(null)}>Cancelar</button>
                                </form>
                            ) : (
                                <div className="post-actions">
                                    <button className="button button-edit" onClick={() => handleEditClick(post)}>
                                        <FaPencilAlt />
                                    </button>
                                    <button className="button button-delete" onClick={() => actions.deletePost(post.id)}>
                                        <FaTrash />
                                    </button>
                                    <button
                                        className={`button button-favorite ${post.isFavorite ? "favorite-active" : ""}`}
                                        onClick={() => actions.toggleFavorite(post.id)}
                                    >
                                        {post.isFavorite ? <FaHeart color="red" /> : <FaHeart color="gray" />}
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <p>No hay publicaciones aún</p>
                )}
            </div>
        </div>
    );
};
