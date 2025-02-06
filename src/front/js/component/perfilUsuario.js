import React, { useState, useContext, useEffect } from "react"; 
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import '../../styles/perfilUsuario.css'





export const PerfilUsuario = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    const [editPostForm, setEditPostForm] = useState(null);
    const [favorites, setFavorites] = useState([]);




    useEffect(() => {
        actions.getPosts();
        !localStorage.getItem("token") && navigate("/");
        console.log("usuario en localStorage:", localStorage.getItem("user"));
        console.log(store.posts)
    }, []);

    
    return (
        <div className="perfilpost">
            <h2 className="textpublicaciones">Mis Publicaciones</h2>
            <div className="feed">
                {store.posts.length > 0 ? (
                    store.posts.map(post => (
                        <div key={post.id} className="bodypost">
                            <h3 className="titulopost">{post.title}</h3>
                            <p className="description-post">{post.body}</p>
                            {post.image && <img src={post.image} alt="post" />}
                            {editPostForm && editPostForm.id === post.id ? (
                                <div className="formulario-post">
                                    <h2>Editar Post</h2>
                                    <form onSubmit={(e) => actions.handleEditSubmit(e, editPostForm, setEditPostForm)}>
                                        <input
                                            type="text"
                                            placeholder="Título"
                                            value={editPostForm?.title ?? ""}
                                            onChange={(e) =>
                                                setEditPostForm(prev => ({
                                                    ...prev,
                                                    title: e.target.value
                                                }))
                                            }
                                            required
                                        />
                                        <textarea
                                            placeholder="Descripción"
                                            value={editPostForm?.description ?? ""}
                                            onChange={(e) =>
                                                setEditPostForm(prev => ({
                                                    ...prev,
                                                    description: e.target.value
                                                }))
                                            }
                                        />
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={editPostForm?.favorites ?? false}
                                                onChange={() =>
                                                    setEditPostForm(prev => ({
                                                        ...prev,
                                                        favorites: !prev.favorites
                                                    }))
                                                }
                                            />
                                            Agregar a favoritos
                                        </label>
                                        <Uploader setUploadedUrl={setUploadedUrl} />
                                        <button type="submit">Publicar</button>
                                        <button type="button" onClick={() => setEditPostForm(null)}>
                                            Cancelar
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className="post-actions">
                                    <button onClick={() => actions.editPost(post)}>Editar</button>
                                    <button onClick={() => actions.deletePost(post.id)}>Eliminar</button>
                                    <button onClick={() => actions.toggleFavorite(post.id)}>
                                        {favorites.includes(post.id) ? "★ Favorito" : "☆ Favorito"}
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
