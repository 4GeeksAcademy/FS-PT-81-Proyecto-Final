import React from "react";


import '../../styles/destinos_ciudades.css';

export const QuienesSomos = () => {
    return (
        <div className="container">
            <img src="" alt="Imagen de ejemplo" />
            <p className="m-auto">Hola</p>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <p>SOBRE NOSOTROS</p>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <p>SOBRE NOSOTROS</p>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <p>SOBRE NOSOTROS</p>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};
