import React, {useState, useContext} from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import { Weather } from "../component/weather.jsx";
import '../../styles/destinos_ciudades.css';

  export const Merzouga =() => {
      const [showWeather, setShowWeather ]= useState (false);
      const {store, actions} = useContext(Context);

      useEffect (()=>{
          if (showWeather && (!store.weather || store.weather.location !== "Merzouga")){
              actions.getWeather("Merzouga");
      }
  }, [showWeather]);
  const toggleWeather=() =>{
    setShowWeather(!showWeather);
  };

  const merzougaDestino = store.destinos.find((destino)=> destino.nombre === "Merzouga")
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
          <h4 className="city_Merzouga d-flex">
              <span className="mar_word">MAR</span>
              <span className="rac_word">RAC</span>
              <span className="ech_word">ECH</span>
            
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
                  href={merzougaDestino?.omsLink}
                  target="_blank"
                  rel= "noopener noreferrer">
                    <i className="fa-regular fa-map" />
                  </a>
                  </li>
              </ul>
              <h3>
                  ¿Que no puedes perderte de Merzouga?
              </h3>

          </div>
        
              {showWeather &&  store.weather && (
                  <div className= "weather-container">
                      {showWeather && <Weather city = "Merzouga" />}
              
          </div>
          )}
        </div>
      </div>
  );
  };
