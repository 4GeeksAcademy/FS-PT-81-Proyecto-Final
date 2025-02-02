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
const watMahathatDestino = store.destinos.find((destino)=> destino.nombre === "Wat Mahathat")
const watPraDestino = store.destinos.find((destino)=> destino.nombre === "Wat Phra")
const watChainwatthanaramhDestino = store.destinos.find((destino)=> destino.nombre === "Wat Chainwatthanaram")
const watLokayasutharamDestino = store.destinos.find((destino)=> destino.nombre === "Wat Lokayasutharam")
const ayuttayahFloatingMarketDestino = store.destinos.find((destino)=> destino.nombre === "Ayutthaya Floating Market")
return(
    <div>
     
      <div className="container">
        <h4 className="city_destinos d-flex">
            <span className="ayu_word">AYU</span>
            <span className="tth_word">TTH</span>
            <span className="aya_word">AYA</span>
           
        </h4>
        <div className="list">
            <ul>
                
                <li onClick={toggleWeather}
                style={{cursor:"pointer"}}>
                    <p className="tiempo">Metereología</p>
                </li>
                <li>
              <a
               href={ayuttayahDestino?.omsLink}
               target="_blank"
               rel="noopener noreferrer">
                 <i className="mapa_icono_ciudad fa-regular fa-map" />
               </a>
                

                </li>
            </ul>
            <div className="container descripcion_ciudades">
            <h3>
                Qué no puedes perderte de Ayutthaya
            </h3>
            <p>
            Ayutthaya, la antigua capital de Tailandia, es un impresionante parque histórico repleto de ruinas de templos 
            y palacios que narran siglos de esplendor. Declarada Patrimonio de la Humanidad, sus majestuosos templos, como Wat Mahathat y
             Wat Chaiwatthanaram, transportan a los visitantes a una época gloriosa. Perfecto para explorar en bicicleta, el ambiente tranquilo 
             y su rica historia hacen de Ayutthaya un lugar mágico. Este destino es un testimonio del legado cultural tailandés, 
             ideal para quienes buscan una experiencia enriquecedora y llena de belleza.
            <br/>
            Te contamos lo imprescindible de Ayuttayah:
            </p>
           <a 
           href={watMahathatDestino?.omsLink}
           target="_blank"
           rel="noopener noreferrer">
             <h5 className="destinos_turisticos">
              Wat Mahathat:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
           </a>
          
          <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            Este es sin lugar a dudas el templo más famoso de Ayutthaya y por lo tanto, una de las cosas que hacer en Ayutthaya que no puedes perderte. Conocido por ser el templo en el que puedes ver la cabeza de Buda entre las raíces de un árbol, este templo podríamos decir que está prácticamente en ruinas ya que resultó uno de los más afectados durante la invasión birmana, que destrozaron gran parte de las figuras

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://thaiunikatravel.com/wp-content/uploads/2023/05/Wat-Mahathat-fea.jpg" alt="Wat Mahatgat"
             />

            </div>
            

        </div>
        <a
        href={watPraDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          <h5 className="destinos_turisticos">
              Wath Phra Si Sanphet:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
        
           <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            "Templo del Sagrado, Espléndido Omnisciente") fue el templo más sagrado ubicado en el viejo palacio real en la antigua capital de Tailandia de Ayutthaya hasta que la ciudad quedó totalmente destruida por los birmanos en 1767.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://th.bing.com/th/id/R.7eb482b6522ab8e5d2e99765537b292b?rik=dzIW71so3R84gw&pid=ImgRaw&r=0" alt="Wat Phra Si Sanphet"
             />

            </div>
            
            

        </div>
        <a
        href={watChainwatthanaramhDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          
          <h5 className="destinos_turisticos">
              Wat Chaiwatthanaram:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            Wat Chaiwatthanaram es un templo budista construido en el año 1630 por el rey Prasat Thong123. 
            El templo fue diseñado según la tradición Theravada del budismo y es uno de los templos más importantes del Reino de Ayutthaya2. 
            Fue construido como un monumento a la madre del rey Prasat Thong12. Wat Chaiwatthanaram fue un templo real donde el rey celebró ceremonias budistas 
            y se utilizaba como residencia de los reyes

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://th.bing.com/th/id/OIP.CGxhYoMvS8Sn72AeVA95hwHaHa?w=800&h=800&rs=1&pid=ImgDetMain" alt="Wat Chaiwatthanaram"
             />

            </div>
            </div>
            <a
            href={watLokayasutharamDestino?.omsLink}
            target="_blank"
            rel="noopener noreferrer">
              <h5 className="destinos_turisticos">
            Wat Lokayasutharam (El Gran Buda Reclinado):
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
            </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            La imagen de buda está reclinada y descansando sobre una flor de lotto, los dedos de los pies son iguales en tamaño y los pies están inscritos con ciento ocho características del Señor. Ambos ojos y los pies están decoradas con un estilo madre perla.

Según una señal allí presente: «La enorme Buda reclinado representa el momento en el que un gigante llamado Asurindarahu no estaba dispuesto a rendir homenaje a los Budas porque él estaba orgulloso de su enorme cuerpo. El Buda quiso que el gigante fuese menos arrogante, por lo que recurrió a sí mismo como mucho más grande que el gigante.»

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://st3.depositphotos.com/1980693/15008/i/950/depositphotos_150082660-stock-photo-recling-buddha-at-wat-lokayasutharam.jpg" alt=" Wat Lokayasutharam"
             />

            </div>
            
            

        </div>
        <a 
        href={ayuttayahFloatingMarketDestino?.omsLink}
        target="_blank"
        rel="noopener noreffer">
          <h5 className="destinos_turisticos">
          Ayutthaya Floating Market:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            Este mercadillo flotante se encuentra en un gran estanque a las afueras de la isla fluvial de Ayutthaya, al este del centro de la ciudad. 
            Los botes a remo pasan por los canales que forman las más de 200 tiendas instaladas en este lugar, dando la posibilidad a los viajeros por solo 20 bahts, de dar un paseo con barca y gozar de una visita totalmente diferente a las otras excursiones que hay por la ciudad
            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://cdn.getyourguide.com/img/tour/5e4e02a389b97.jpeg/146.jpg" alt=" Ayuttayah floating market"
             />

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
    
);
};
