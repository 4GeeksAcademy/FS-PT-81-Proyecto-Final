import React, {useEffect, useState, useContext} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Weather } from "./weather.jsx";
import '../../styles/destinos_ciudades.css';

export const CityView = () => {
    const {store, actions} = useContext(Context);
    const {nombre} = useParams();
    const [showWeather, setShowWeather] = useState(false);
    const city = store.destinos.find(destino => destino.nombre.toLowerCase() === nombre.toLowerCase());
    
    useEffect (() => {
        if(showWeather && (!store.weather || store.weather.location !== city.nombre)){
            actions.getWeather(city.nombre);
        }
    }, [showWeather]);

    const toggleWeather = () => {
        setShowWeather(!showWeather);
    };

    if (!city){
        return <h1>Ciudad no encontrada</h1>;
    }
    return (
        <div>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                        <img src={city.imagen} className="d-block w-100" alt={city.nombre} />
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

            <div className="container">
                <h4 className="city-name2 d-flex">
                    {city.nombre.toUpperCase()}
                </h4>
                <div className="list">
                    <ul>
                        <li>Puntos de interés</li>
                        <li onClick={toggleWeather} style={{ cursor: "pointer" }}>
                            Meteorología
                        </li>
                    </ul>
                    <h3>¿Qué no puedes perderte de {city.nombre}?</h3>
                    <p>
                        Aquí puedes agregar una descripción personalizada para {city.nombre} {city.descripcion}
                    </p>
                </div>

                {showWeather && store.weather && (
                    <div className="weather-container">
                        <Weather city={city.nombre} />
                    </div>
                )}
            </div>
        </div>
    );
}
