
      import React, {useState, useContext} from "react";
      import { useEffect } from "react";
      import { Context } from "../store/appContext";
      import { Weather } from "../component/weather.jsx";
      import {CommentBox} from "../component/comment.jsx";
      import '../../styles/destinos_ciudades.css';

      export const Marrakech =() => {
          const [showWeather, setShowWeather ]= useState (false);
          const {store, actions} = useContext(Context);

          useEffect (()=>{
              if (showWeather && (!store.weather || store.weather.location !== "Marrakech")){
                  actions.getWeather("Marrakech");
          }
      }, [showWeather]);
      const toggleWeather=() =>{
        setShowWeather(!showWeather);

      };
      const marrakechestino = store.destinos.find((destino)=> destino.nombre === "Marrakech")
      const plazaFnaDestino = store.destinos.find((destino)=> destino.nombre === "Plaza Fna")
      const jardinMajorelleDestino = store.destinos.find((destino)=> destino.nombre === "Jardín Majorelle")
      const cataratasOurikaDestino = store.destinos.find((destino)=> destino.nombre === "Cataratas Ourika")
      const desiertoAgafayDestino = store.destinos.find((destino)=> destino.nombre === "Desierto Agafay")
      const mezquitaKoutoubiaDestino = store.destinos.find((destino)=> destino.nombre === "Mezquita Koutoubia")
      return(
    <div>
     
      <div className="container">
      <h4 className="city_destinos d-flex">
            <span className="mar_word">MAR</span>
            <span className="rak_word">RAK</span>
            <span className="ech_word">ECH</span>
           
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
               href={marrakechestino?.omsLink}
               target="_blank"
               rel="noopener noreferrer">
                 <i className="mapa_icono_ciudad fa-regular fa-map" />
               </a>
                

                </li>
            </ul>
            {showWeather &&  store.weather && (
                            <div className= "weather-container">
                                {showWeather && <Weather city = "Marrakech" />}
                        
                    </div>
                    )}
            <div className="container descripcion_ciudades">
            <h3>
                Qué no puedes perderte de Marrakech
            </h3>
            <p>
            Marrakech es una ciudad vibrante que combina tradición y modernidad, conocida como la “Ciudad Roja” por sus murallas de adobe. 
            Su medina, con sus zocos laberínticos y la icónica plaza Jemaa el-Fna, es un espectáculo sensorial de colores, aromas y sonidos. 
            Explora majestuosos palacios, como el Palacio de la Bahía, y jardines tranquilos, como el Jardín Majorelle. 
            Marrakech también es una puerta al Alto Atlas y al desierto, ofreciendo aventura y cultura en un solo destino. 
            Esta ciudad fascinante te seducirá con su energía única y su hospitalidad.
            <br />
            Te contamos lo imprescindible de Marrakech:
            </p>
           <a 
           href={plazaFnaDestino?.omsLink}
           target="_blank"
           rel="noopener noreferrer">
             <h5 className="destinos_turisticos">
             Plaza Jemaa el-Fna:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
           </a>
          
          <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            El alma de Marrakech, una plaza llena de vida y color. Durante el día, encontrarás encantadores de serpientes, 
            narradores de cuentos y vendedores de jugos frescos. Al caer la noche, la plaza se transforma con puestos de comida, 
            música en vivo y espectáculos. Es el lugar ideal para sumergirte en la cultura marroquí. La atmósfera es vibrante y única, 
            perfecta para vivir la esencia de la ciudad.
           

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://marokkanisch.com/wp-content/uploads/2023/01/marokkanisch_com-Djemaa_el_Fna-scaled.jpg" alt="Plaza Jemma el-Fna"
             />

            </div>
            

        </div>
        <a
        href={jardinMajorelleDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          <h5 className="destinos_turisticos">
              Jardín Majorelle:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
        
           <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            Un rincón de tranquilidad diseñado por el artista Jacques Majorelle y rescatado por Yves Saint Laurent. 
            Este jardín destaca por su impactante tono azul, rodeado de plantas exóticas y fuentes. 
            Es un lugar para desconectar y disfrutar de la naturaleza en medio del bullicio urbano. 
            Además, alberga un museo dedicado a la cultura bereber. Un paseo por este jardín es una experiencia relajante y visualmente cautivadora.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://www.moroccoclassictours.com/wp-content/uploads/2020/03/IMG_20200304_155826_32320-2048x1360.jpg" alt="Jardín Majorelle"
             />

            </div>
            
            

        </div>
        <div className="container-ciudades">
        <a
        href={cataratasOurikaDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          <h5 className="destinos_turisticos">
          Cataratas de Ourika:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            Situadas en el hermoso valle de Ourika, a solo una hora de Marrakech, estas cascadas son un paraíso natural rodeado de montañas del Atlas. 
            Sus aguas cristalinas caen entre paisajes de vegetación exuberante, ofreciendo vistas espectaculares y un respiro del calor de la ciudad.
             El entorno es perfecto para hacer senderismo, disfrutar de la tranquilidad o explorar pequeños pueblos bereberes cercanos. Durante el recorrido, 
             encontrarás cafés rústicos al borde del río y puntos panorámicos únicos. Es un lugar ideal para los amantes de la naturaleza y quienes buscan desconexión. 

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://www.asaramoroccotours.com/wp-content/uploads/2019/10/marrakech-to-ouzoud-featured.jpg" alt="Cataratas Ourika"
             />
            </div>
            </div>
            <a
            href={desiertoAgafayDestino?.omsLink}
            target="_blank"
            rel="noopener noreferrer">
              <h5 className="destinos_turisticos">
            Desierto de Agafay:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
            </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            A tan solo 40 kilómetros de Marrakech, el desierto de Agafay ofrece una experiencia inolvidable en un paisaje árido y ondulante, 
            con tonos dorados y ocres que se extienden hasta el horizonte. A diferencia de los desiertos de arena tradicionales, 
            Agafay es un desierto rocoso, pero igualmente fascinante. Aquí puedes disfrutar de paseos en camello, rutas en quad o cenas bajo un cielo estrellado que parece infinito. 
            Su tranquilidad y belleza lo convierten en un destino perfecto para desconectar y conectarte con la naturaleza. 

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://www.marrakechbestof.com/wp-content/uploads/2022/12/091BD408-1A02-448F-B6BD-6C2DD44A7EB3.jpeg" alt="Desierto Agafay"
             />

            </div>
            
            

        </div>
        <a 
        href={mezquitaKoutoubiaDestino?.omsLink}
        target="_blank"
        rel="noopener noreffer">
          <h5 className="destinos_turisticos">
          Mezquita Koutoubia:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container">
            
            <div className="first_paragraph">
            <p>
            El símbolo más icónico de Marrakech, conocido por su impresionante minarete de 77 metros. 
            Aunque el acceso está restringido a no musulmanes, su arquitectura islámica y su entorno son fascinantes. 
            Rodeada de jardines, es ideal para disfrutar de una vista tranquila. Su presencia domina el horizonte de la ciudad y se considera un faro espiritual. 
            Es una parada imprescindible para los amantes de la historia y la cultura.
            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://lp-cms-production.imgix.net/2021-04/shutterstockRF_780290506.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=20&dpr=5" alt="Mezquita Koutoubia"
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