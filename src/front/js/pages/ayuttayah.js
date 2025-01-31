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
            <div className="container descripcion_ciudades">
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
            style={{width:"20%", border:"2px solid rgb(223, 192, 22)"}} />

            </div>
            

        </div>
        <h5>
              Wath Phra Si Sanphet:
            </h5>
           <div className="container">
            <div className="first_paragraph d-flex">
            <p>
            "Templo del Sagrado, Espléndido Omnisciente") fue el templo más sagrado ubicado en el viejo palacio real en la antigua capital de Tailandia de Ayutthaya hasta que la ciudad quedó totalmente destruida por los birmanos en 1767.

            </p>
            <img 
            src="https://th.bing.com/th/id/R.7eb482b6522ab8e5d2e99765537b292b?rik=dzIW71so3R84gw&pid=ImgRaw&r=0" alt="Wat Phra Si Sanphet"
            style={{width:"20%", border:"2px solid rgb(223, 192, 22)"}} />

            </div>
            
            

        </div>
        <h5>
              Wat Chaiwatthanaram:
            </h5>
           <div className="container">
            
            <div className="first_paragraph d-flex">
            <p>
            Wat Chaiwatthanaram es un templo budista construido en el año 1630 por el rey Prasat Thong123. El templo fue diseñado según la tradición Theravada del budismo y es uno de los templos más importantes del Reino de Ayutthaya2. Fue construido como un monumento a la madre del rey Prasat Thong12. Wat Chaiwatthanaram fue un templo real donde el rey celebró ceremonias budistas y se utilizaba como residencia de los reyes

            </p>
            <img 
            src="https://th.bing.com/th/id/OIP.CGxhYoMvS8Sn72AeVA95hwHaHa?w=800&h=800&rs=1&pid=ImgDetMain" alt="Wat Chaiwatthanaram"
            style={{width:"20%", border:"2px solid rgb(223, 192, 22)"}} />

            </div>
            <h5>
            Wat Lokayasutharam (El Gran Buda Reclinado):
            </h5>
           <div className="container">
            
            <div className="first_paragraph d-flex">
            <p>
            La imagen de buda está reclinada y descansando sobre una flor de lotto, los dedos de los pies son iguales en tamaño y los pies están inscritos con ciento ocho características del Señor. Ambos ojos y los pies están decoradas con un estilo madre perla.

Según una señal allí presente: «La enorme Buda reclinado representa el momento en el que un gigante llamado Asurindarahu no estaba dispuesto a rendir homenaje a los Budas porque él estaba orgulloso de su enorme cuerpo. El Buda quiso que el gigante fuese menos arrogante, por lo que recurrió a sí mismo como mucho más grande que el gigante.»

            </p>
            <img 
            src="https://st3.depositphotos.com/1980693/15008/i/950/depositphotos_150082660-stock-photo-recling-buddha-at-wat-lokayasutharam.jpg" alt=" Wat Lokayasutharam"
            style={{width:"20%", border:"2px solid rgb(223, 192, 22)"}} />

            </div>
            
            

        </div>
        <h5>
          Ayutthaya Floating Market:
            </h5>
           <div className="container">
            
            <div className="first_paragraph d-flex">
            <p>
            Este mercadillo flotante se encuentra en un gran estanque a las afueras de la isla fluvial de Ayutthaya, al este del centro de la ciudad. 
            Los botes a remo pasan por los canales que forman las más de 200 tiendas instaladas en este lugar, dando la posibilidad a los viajeros por solo 20 bahts, de dar un paseo con barca y gozar de una visita totalmente diferente a las otras excursiones que hay por la ciudad
            </p>
            <img 
            src="https://cdn.getyourguide.com/img/tour/5e4e02a389b97.jpeg/146.jpg" alt=" Ayuttayah floating market"
            style={{width:"20%", border:"2px solid rgb(223, 192, 22)"}} />

            </div>
            
            

        </div>
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
