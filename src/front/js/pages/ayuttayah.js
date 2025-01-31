import React, {useState, useContext} from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import { Weather } from "../component/weather.jsx";
import {CommentBox} from "../component/comment.jsx";
import '../../styles/destinos_ciudades.css';

export const Ayuttayah =() => {
    const [showWeather, setShowWeather ]= useState (false);
    const {store, actions} = useContext(Context);

    useEffect (()=>{
        if (showWeather && (!store.weather || store.weather.location !== "Ayuttayah")){
            actions.getWeather("Essaouira");
    }
}, [showWeather]);
const toggleWeather=() =>{
   setShowWeather(!showWeather);

};
const ayuttayahDestino = store.destinos.find((destino)=> destino.nombre === "Ayuttayah")
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
        <h4 className="city_Essaouira d-flex">
            <span className="mar_word">MAR</span>
            <span className="rac_word">RAC</span>
            <span className="ech_word">ECH</span>
           
        </h4>
        <div className="list">
            <ul>
                
                <li onClick={toggleWeather}
                style={{cursor:"pointer"}}>
                    Metereología
                </li>
                <li>
              <a
               href={ayuttayahDestino?.omsLink}
               target="_blank"
               rel="noopener noreferrer">
                 <i className="fa-regular fa-map" />
               </a>
                

                </li>
            </ul>
            <h3>
                ¿Que no puedes perderte de Ayuttayah?
            </h3>
            <p>
            Declarada Patrimonio de la Humanidad, la Ciudad Antigua de Ayutthaya o Reino de Siam, fue fundada por el Rey U-Thong en el año 1350 y se convirtió, durante prácticamente tres siglos, en uno de los emplazamientos más importantes del país además de uno de los lugares más sagrados para el budismo.
            <br/>
            Te contamos lo imprescindible de Ayuttayah:
            </p>
            <h5>
              Wath Mahathat:
            </h5>
           <div className="container">
            <div className="first_paragraph d-flex">
            <p>
            Este es sin lugar a dudas el templo más famoso de Ayutthaya y por lo tanto, una de las cosas que hacer en Ayutthaya que no puedes perderte. Conocido por ser el templo en el que puedes ver la cabeza de Buda entre las raíces de un árbol, este templo podríamos decir que está prácticamente en ruinas ya que resultó uno de los más afectados durante la invasión birmana, que destrozaron gran parte de las figuras

            </p>
            <img 
            src="https://www.viajeroscallejeros.com/wp-content/uploads/2019/02/buda-arbol-wat-mahatat.jpg" alt="Wat Mahatgat"
            style={{width:"20%"}} />

            </div>

        </div>
       
            {showWeather &&  store.weather && (
                <div className= "weather-container">
                    {showWeather && <Weather city = "Ayuttayah" />}
            
        </div>
        )}
      </div>
      <div className="box-comment container">
              < CommentBox />
            </div>
    </div>
    </div>
);
};
