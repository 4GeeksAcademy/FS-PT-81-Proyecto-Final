import React, {useState, useContext} from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import { Weather } from "../component/weather.jsx";
import '../../styles/destinos_ciudades.css';

export const Bangkok =() => {
    const [showWeather, setShowWeather ]= useState (false);
    const {store, actions} = useContext(Context);

    useEffect (()=>{
        if (showWeather && (!store.weather || store.weather.location !== "Bangkok")){
            actions.getWeather("Bangkok");
    }
}, [showWeather]);
const toggleWeather=() =>{
   setShowWeather(!showWeather);
};

const bangkokDestino = store.destinos.find((destino) => destino.nombre === "Bangkok")
return(
    <div>
     <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImbTxAL38LSpvBuDOp1ywCf8IDhyqKrPIbw&s"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImbTxAL38LSpvBuDOp1ywCf8IDhyqKrPIbw&s"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImbTxAL38LSpvBuDOp1ywCf8IDhyqKrPIbw&s"
              className="d-block w-100"
              alt="..."
            />
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
        <h4 className="city_Bangkok d-flex">
            <span className="bar_word">BAR</span>
            <span className="ce_word">CE</span>
            <span className="lo_word">LO</span>
            <span className="na_word">NA</span>
        </h4>
        <div className="list">
            <ul>
                <li>Puntos de interés</li>
                <li onClick={toggleWeather}
                style={{cursor:"pointer"}}>
                    Metereología
                </li>
                <li>
                  <a
                  href={bangkokDestino?.omsLink}
                  target="_blank"
                  rel= "noopener noreferrer">
                    <i className="fa-regular fa-map" />
                  </a>
                </li>
            </ul>
            <h3>
                ¿Que no puedes perderte de Bangkok?
            </h3>

        </div>
       
            {showWeather &&  store.weather && (
                <div className= "weather-container">
                    {showWeather && <Weather city = "Bangkok" />}
            
        </div>
        )}
      </div>
    </div>
);
};
