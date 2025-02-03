
      import React, {useState, useContext} from "react";
      import { useEffect } from "react";
      import { Context } from "../store/appContext";
      import { Weather } from "../component/weather.jsx";
      import {CommentBox} from "../component/comment.jsx";
      import '../../styles/destinos_ciudades.css';

      export const Krabi =() => {
          const [showWeather, setShowWeather ]= useState (false);
          const {store, actions} = useContext(Context);

          useEffect (()=>{
              if (showWeather && (!store.weather || store.weather.location !== "Krabi")){
                  actions.getWeather("Krabi");
          }
      }, [showWeather]);
      const toggleWeather=() =>{
        setShowWeather(!showWeather);

      };
      const krabiDestino = store.destinos.find((destino)=> destino.nombre === "Krabi")
      const railayBeachDestino = store.destinos.find((destino)=> destino.nombre === "Railay Beach")
      const phiPhiDestino = store.destinos.find((destino)=> destino.nombre === "Phi Phi Islands")
      const smeraldDestino = store.destinos.find((destino)=> destino.nombre === "Smerald Pool")
      const tigerCaveDestino = store.destinos.find((destino)=> destino.nombre === "Tiger Cave")
      const aoNangDestino = store.destinos.find((destino)=> destino.nombre === "Ao Nang")
      return(
    <div>
     
      <div className="container">
        <h4 className="city_destinos d-flex">
            <span className="kra_word">KRA</span>
            <span className="bi_word">BI</span>
            
           
        </h4>
        <div className="list">
            <ul>
                
                <li onClick={toggleWeather}
                style={{cursor:"pointer"}}>
                   <p className="tiempo">
                    Metereología
                    </p>
                </li>
                <li>
              <a
               href={krabiDestino?.omsLink}
               target="_blank"
               rel="noopener noreferrer">
                 <i className="mapa_icono_ciudad fa-regular fa-map" />
               </a>
                

                </li>
            </ul>
            {showWeather &&  store.weather && (
                <div className= "weather-container">
                    {showWeather && <Weather city = "Krabi" />}
            
        </div>
        )}
            <div className="container descripcion_ciudades">
            <h3>
                Qué no puedes perderte de Krabi
            </h3>
            <p>
            Krabi, en el sur de Tailandia, es un paraíso tropical con playas de ensueño, acantilados de piedra caliza y aguas cristalinas. 
            Perfecto para los amantes de la aventura y la relajación, aquí puedes explorar islas icónicas como Phi Phi y Railay, 
            o descubrir templos ocultos y cascadas en la selva. Las puestas de sol en Krabi son espectaculares, con colores que transforman el cielo y el mar. 
            Es un destino ideal para quienes buscan combinar naturaleza impresionante, cultura tailandesa y playas paradisíacas en un solo lugar.


            <br/>
            Te contamos lo imprescindible de Krabi:
            </p>
           <a 
           href={railayBeachDestino?.omsLink}
           target="_blank"
           rel="noopener noreferrer">
             <h5 className="destinos_turisticos">
              Railay Beach:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
           </a>
          
          <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            Railay Beach es un paraíso escondido entre acantilados de piedra caliza y aguas cristalinas, solo accesible por barco. 
            Perfecta para los amantes de la naturaleza, es ideal para disfrutar de la tranquilidad, practicar escalada o simplemente 
            relajarte en sus playas de arena blanca. Cada rincón de Railay ofrece una belleza única que te dejará sin aliento. 
            Sin duda, es uno de los destinos más hermosos de Tailandia.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://cms.w2m.com/.imaging/mte/basic-theme/fullHd/dam/Master-Data/Destinations/Asia/Tailandia/Krabi/Images/ext-laguna-turquesa-rocas-islas-krabi.jpg/jcr:content/ext-laguna-turquesa-rocas-islas-krabi.jpg" alt="Railay Beach"
             />

            </div>
            

        </div>
        <a
        href={phiPhiDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          <h5 className="destinos_turisticos">
              Phi Phi Islands:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
        
           <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            Las Islas Phi Phi son el sueño hecho realidad para los amantes de las playas idílicas y las aguas turquesas. 
            Aquí puedes explorar la famosa Maya Bay, practicar snorkel entre arrecifes de coral o simplemente disfrutar del 
            sol en sus playas de arena blanca. La vibrante vida nocturna de Phi Phi Don también añade un toque especial a tu visita. 
            Es un lugar donde la naturaleza y la diversión se encuentran a la perfección.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://content.phuket101.net/wp-content/uploads/20200507081806/phi-phi-islanf-thailand.jpg" alt="Phi Phi Islands"
             />

            </div>
            
            

        </div>
        <div className="container-ciudades">
        <a
        href={smeraldDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          <h5 className="destinos_turisticos">
          Smerald Pool:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            Sumérgete en la increíble Emerald Pool, una piscina natural de agua color esmeralda rodeada de un frondoso bosque tropical. 
            Este lugar mágico es ideal para relajarse y conectarse con la naturaleza mientras disfrutas de un baño revitalizante. 
            El acceso es sencillo y el recorrido por el sendero en la jungla lo hace aún más especial. Un oasis de tranquilidad que no puedes dejar de visitar.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://i2.wp.com/gotothailand.com/wp-content/uploads/2017/04/Blue-Pool-Krabi1.jpg?fit=1768%2C1130&ssl=1" alt="Smerald Pool"
             />
            </div>
            </div>
            <a
            href={tigerCaveDestino?.omsLink}
            target="_blank"
            rel="noopener noreferrer">
              <h5 className="destinos_turisticos">
            Tiger Cave Temple:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
            </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            Sube los 1,237 escalones hasta el Tiger Cave Temple y serás recompensado con vistas panorámicas impresionantes de Krabi. 
            Este templo budista, rodeado de naturaleza, es perfecto para una experiencia espiritual única. La caminata es desafiante, 
            pero la recompensa de las vistas y la atmósfera mística hacen que cada paso valga la pena. Es una mezcla perfecta de aventura, cultura y belleza.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://th.bing.com/th/id/R.c0728f6277f6fbd26490fb989031d65f?rik=Qe2rj%2bmBsDCsxA&riu=http%3a%2f%2fwww.dronestagr.am%2fwp-content%2fuploads%2f2014%2f11%2fDJI00720-1024x768.jpg&ehk=MlEH6u1iZfC8iVKqC5Mx5V%2bUXv%2f48ndanYJtNZ6pHAk%3d&risl=&pid=ImgRaw&r=0" alt=" Tiger Cave Temple"
             />

            </div>
            
            

        </div>
        <a 
        href={aoNangDestino?.omsLink}
        target="_blank"
        rel="noopener noreffer">
          <h5 className="destinos_turisticos">
          Ao Nang:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container">
            
            <div className="first_paragraph">
            <p>
            Ao Nang es el centro turístico de Krabi, donde la comodidad y la aventura se combinan. 
            Desde aquí, puedes explorar las cercanas islas paradisíacas o disfrutar de una vibrante vida nocturna en sus bares y restaurantes. 
            Uno de los atractivos turisticos de Ao Nang es el mercado nocturno (Night Market), si tienes oportunidad de sumergirte en el interior 
            este mercado, podrás disfrutar de una diversidad de sabores que te dejarán sin palabras.
            Las playas de Ao Nang son perfectas para relajarte, mientras disfrutas de vistas impresionantes. 
            Es el lugar ideal para empezar tu aventura en Krabi y experimentar lo mejor de la región.
            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://cdn.forevervacation.com/uploads/attraction/ao-nang-beach-4892.webp" alt="Ao Nang"
             />

            </div>
            
            

        </div>
        </div>
            
            

        </div>
       
            
      </div>
      <div className="box-comment container">
              < CommentBox />
            </div>
    </div>
    </div>
);
};
