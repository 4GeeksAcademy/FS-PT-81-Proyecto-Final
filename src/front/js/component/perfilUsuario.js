import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import '../../styles/perfilUsuario.css'
import { Logout } from "./logout";
import { Uploader } from "./uploader";



export const PerfilUsuario = ({ user, setUser }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [uploadedUrl, setUploadedUrl] = useState("");
    const [favorites, setFavorites] = useState(false);

    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getPosts();
        !localStorage.getItem("token") && navigate("/");
        console.log("usuario en localStorage:", localStorage.getItem("user"));
    }, []);
    /*/const handleSubmit = async (e) => {
        e.preventDefault();
        actions.createPost(title, description, uploadedUrl, favorites);
        setTitle("");
        setDescription("");
        setUploadedUrl("");
        setFavorites(false);

    };/*/

    return (
        <div className="perfil-container">
            {store.user ? (
                <>
                    <div id=" carouselExampleCaptions" className=" jumbotron carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className=" carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://imgs.search.brave.com/trpB2z0vWJFbBf-J8N04X6MNibBdvqw_LtDi8yKP9l4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMC8w/NC8wNi8xOC80OC9t/YWRyaWQtNTAxMDgw/M182NDAuanBn" className="d-block w-100" alt="madrid"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://imgs.search.brave.com/g8L6B6kxi1FMoCIQ03oTfNABz0xvXV8Ecv3gWABUhIs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFycnVlY29zLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvU2Vt/YW5hLVNhbnRhLWVu/LU1hcnJ1ZWNvcy0x/LTEwMjR4NzY4Lmpw/Zw" className="d-block w-100" alt="marruecos"/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://imgs.search.brave.com/-Puqvhnk6nesKY-EwyHXNgiYd895GhJdXYgaX2oOeHk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvaW1hZ2VuZXMt/ZGUtdGFpbGFuZGlh/LTYzZjhzZHdhb3Zv/eGRhNnAuanBn" className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </>
            ) : (
                <p> Cargando los datos....</p>
            )}
        </div>
    );
};

