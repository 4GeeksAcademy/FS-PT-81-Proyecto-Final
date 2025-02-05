      import React, {useState, useContext} from "react";
      import { useEffect } from "react";
      import { Context } from "../store/appContext";
      import { Weather } from "../component/weather.jsx";
      import {CommentBox} from "../component/comment.jsx";
      import '../../styles/destinos_ciudades.css';

      export const Barcelona =() => {
          const [showWeather, setShowWeather ]= useState (false);
          const {store, actions} = useContext(Context);

          useEffect (()=>{
              if (showWeather && (!store.weather || store.weather.location !== "Barcelona")){
                  actions.getWeather("Barcelona");
          }
      }, [showWeather]);
      const toggleWeather=() =>{
        setShowWeather(!showWeather);

      };
      const barcelonaestino = store.destinos.find((destino)=> destino.nombre === "Barcelona")
      const sagradaFamiliaDestino = store.destinos.find((destino)=> destino.nombre === "Sagrada Familia")
      const parcGuellDestino = store.destinos.find((destino)=> destino.nombre === "Parque Güell")
      const ramblaDestino = store.destinos.find((destino)=> destino.nombre === "Rambla")
      const barrioGoticoDestino = store.destinos.find((destino)=> destino.nombre === "Barrio Gótico")
      const monasterioMonserratDestino = store.destinos.find((destino)=> destino.nombre === "Monserrat")
      return(
    <div>
     
      <div className="container">
        <h4 className="city_destinos d-flex">
            <span className="bar_word">BAR</span>
            <span className="ce_word">CE</span>
            <span className="lo_word">LO</span>
            <span className="na_word">NA</span>
            
           
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
               href={barcelonaestino?.omsLink}
               target="_blank"
               rel="noopener noreferrer">
                 <i className="mapa_icono_ciudad fa-regular fa-map" />
               </a>
                

                </li>
            </ul>
            {showWeather &&  store.weather && (
                <div className= "weather-container">
                    {showWeather && <Weather city = "Barcelona" />}
            
        </div>
        )}
            <div className="container descripcion_ciudades">
            <h3>
                Qué no puedes perderte de Barcelona
            </h3>
            <p>
            Barcelona es una ciudad mediterránea que fusiona cultura, arte y diversión como ninguna otra. 
            Famosa por las obras maestras de Gaudí, como la Sagrada Familia y el Parque Güell, esta ciudad vibrante es un paraíso para los amantes de la arquitectura. 
            Sus playas soleadas, su gastronomía catalana y su vibrante vida nocturna la convierten en un destino imprescindible. 
            Desde las pintorescas calles del Barrio Gótico hasta las vistas panorámicas desde Montjuïc, 
            Barcelona es un mosaico de experiencias inolvidables. Perfecta para todos los gustos, te invita a perderte en su creatividad y encanto.
            <br/>
            Te contamos lo imprescindible de Barcelona:
            </p>
           <a 
           href={sagradaFamiliaDestino?.omsLink}
           target="_blank"
           rel="noopener noreferrer">
             <h5 className="destinos_turisticos">
              Sagrada Familia
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
           </a>
          
          <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            La Sagrada Familia es la obra maestra inacabada de Antoni Gaudí y uno de los símbolos más icónicos de Barcelona. 
            Su arquitectura única, con formas orgánicas y detalles intrincados, la convierte en una visita obligada. 
            Aunque sigue en construcción, el interior es tan impresionante como el exterior, con un juego de luz y color fascinante. 
            Es un lugar imprescindible para los amantes del arte y la historia. 
           

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://navigosha.com/pic/place/sagrada-familia.jpg" alt="Sagrada Familia"
             />

            </div>
            

        </div>
        <a
        href={parcGuellDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          <h5 className="destinos_turisticos">
              Parque Güell
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
        
           <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            El Parque Güell, otra creación de Gaudí, es un lugar mágico lleno de color y naturaleza. 
            Con sus mosaicos, estructuras onduladas y vistas panorámicas de la ciudad, te sentirás transportado a un mundo de fantasía. 
            Además de sus famosas bancas en forma de serpiente, el parque es perfecto para pasear y disfrutar de un entorno único. 
            Un rincón de Barcelona que no te puedes perder.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://architecturebest.com/wp-content/uploads/2021/06/park-Guyel-3-768x511.jpeg" alt="Parc Güell"
             />

            </div>
            
            

        </div>
        <div className="container-ciudades">
        <a
        href={ramblaDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          <h5 className="destinos_turisticos">
          La Rambla:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            La Rambla es una de las calles más famosas de Barcelona, un paseo lleno de vida que conecta la Plaza de Catalunya con el puerto. 
            A lo largo de esta avenida podrás encontrar mercados, artistas callejeros y terrazas llenas de encanto. La Boquería, su mercado más emblemático, 
            ofrece una experiencia gastronómica única. Es el lugar perfecto para sentir la esencia de la ciudad y su bullicioso ambiente.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://barcelonahacks.com/wp-content/uploads/2023/01/las-ramblas-barcelona-aerial-view.jpg" alt="La Rambla"
             />
            </div>
            </div>
            <a
            href={barrioGoticoDestino?.omsLink}
            target="_blank"
            rel="noopener noreferrer">
              <h5 className="destinos_turisticos">
           El Barrio Gótico:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
            </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            El Barrio Gótico es el alma histórica de Barcelona, con sus estrechas callejuelas, plazas escondidas y arquitectura medieval. 
            Aquí encontrarás la Catedral de Barcelona, calles llenas de historia y pequeñas tiendas encantadoras. 
            Pasear por sus rincones es como viajar atrás en el tiempo, disfrutando de la rica herencia cultural de la ciudad. 
            Un lugar perfecto para perderse y explorar a pie.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://th.bing.com/th/id/OIP.pFhPa2Rb1Nc1zTv6QOtA9wHaFn?rs=1&pid=ImgDetMain" alt="Barrio Gótico"
             />

            </div>
            
            

        </div>
        <a 
        href={monasterioMonserratDestino?.omsLink}
        target="_blank"
        rel="noopener noreffer">
          <h5 className="destinos_turisticos">
          El Monasterio de Monserrat:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container">
            
            <div className="first_paragraph">
            <p>
            El Monasterio de Montserrat es el corazón espiritual de la montaña, con una historia que data del siglo IX. 
            Situado en un paisaje montañoso impresionante, alberga la famosa Virgen de Montserrat, también conocida como "La Moreneta". 
            Su arquitectura única y su entorno natural crean un ambiente de paz y serenidad. Un lugar ideal para disfrutar de la espiritualidad, la historia y las vistas espectaculares.
            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://tendimag.com/wp-content/uploads/2019/11/mosteiro-de-monserrat.jpg" alt="Monserrat"
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