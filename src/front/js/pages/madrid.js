      import React, {useState, useContext} from "react";
      import { useEffect } from "react";
      import { Context } from "../store/appContext";
      import { Weather } from "../component/weather.jsx";
      import {CommentBox} from "../component/comment.jsx";
      import '../../styles/destinos_ciudades.css';

      export const Madrid =() => {
          const [showWeather, setShowWeather ]= useState (false);
          const {store, actions} = useContext(Context);

          useEffect (()=>{
              if (showWeather && (!store.weather || store.weather.location !== "Madrid")){
                  actions.getWeather("Madrid");
          }
      }, [showWeather]);
      const toggleWeather=() =>{
        setShowWeather(!showWeather);

      };
      const madridestino = store.destinos.find((destino)=> destino.nombre === "Madrid")
      const palacioRealDestino = store.destinos.find((destino)=> destino.nombre === "Palacio Real")
      const museoPradoDestino = store.destinos.find((destino)=> destino.nombre === "Museo del Prado")
      const parqueRetiroDestino = store.destinos.find((destino)=> destino.nombre === "Parque del Retiro")
      const puertaSolDestino = store.destinos.find((destino)=> destino.nombre === "Puerta del Sol")
      const granViaDestino = store.destinos.find((destino)=> destino.nombre === "Gran Via")
      return(
    <div>
     
      <div className="container">
        <h4 className="city_destinos d-flex">
            <span className="ma_word">MA</span>
            <span className="dr_word">DR</span>
            <span className="id_word">ID</span>
            
           
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
               href={madridestino?.omsLink}
               target="_blank"
               rel="noopener noreferrer">
                 <i className="mapa_icono_ciudad fa-regular fa-map" />
               </a>
                

                </li>
            </ul>
            {showWeather &&  store.weather && (
                            <div className= "weather-container">
                                {showWeather && <Weather city = "Madrid" />}
                        
                    </div>
                    )}
            <div className="container descripcion_ciudades">
            <h3>
                Qué no puedes perderte de Madrid
            </h3>
            <p>
            Madrid, la capital de España, es un destino dinámico que combina cultura, historia y entretenimiento. 
            Hogar de museos de renombre mundial, como el Prado y el Reina Sofía, esta ciudad también deslumbra con sus animadas plazas, 
            como la Puerta del Sol y la Plaza Mayor. Su vida nocturna vibrante, su escena gastronómica y su pasión por el fútbol hacen que siempre haya algo por descubrir. 
            Pasea por el Parque del Retiro o explora el majestuoso Palacio Real. Madrid es una ciudad que late con energía, perfecta para los amantes de la vida urbana.
            <br/>
            Te contamos lo imprescindible de Madrid:
            </p>
           <a 
           href={palacioRealDestino?.omsLink}
           target="_blank"
           rel="noopener noreferrer">
             <h5 className="destinos_turisticos">
              Palacio Real de Madrid:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
           </a>
          
          <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            El Palacio Real es una de las residencias oficiales más grandes de Europa y un símbolo de la monarquía española. 
            Su impresionante arquitectura y sus lujosos interiores, incluidos los Salones del Trono y los jardines, 
            te transportarán a épocas pasadas. Puedes recorrer sus estancias y disfrutar de la rica historia de España. 
            Es una parada imprescindible para los amantes de la historia y la arquitectura. 
           

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://images.musement.com/cover/0156/13/thumb_15512349_cover_header.jpg" alt="Palacio Real"
             />

            </div>
            

        </div>
        <a
        href={museoPradoDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          <h5 className="destinos_turisticos">
              Museo del Prado:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
        
           <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            El Museo del Prado alberga una de las colecciones de arte más importantes del mundo, 
            con obras maestras de Velázquez, Goya, El Bosco y muchos más. Sus salas, llenas de pinturas y esculturas, 
            son un viaje por la historia del arte europeo. Es el lugar ideal para los amantes del arte y la cultura. 
            Un paseo por el Prado te sumergirá en siglos de creatividad y belleza.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://th.bing.com/th/id/OIP.Mmm_eWrUc-a3n19jY6Dt7AHaEc?rs=1&pid=ImgDetMain" alt="Museo Prado"
             />

            </div>
            
            

        </div>
        <div className="container-ciudades">
        <a
        href={parqueRetiroDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          <h5 className="destinos_turisticos">
          Parque del Retiro:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            El Parque del Retiro es un oasis verde en el centro de Madrid, perfecto para relajarse o disfrutar de un paseo en bote por su estanque. 
            Con hermosos jardines, esculturas y monumentos, el parque es ideal para desconectar del bullicio urbano. 
            Además, puedes explorar el Palacio de Cristal y el Palacio de Velázquez, dos lugares llenos de arte y naturaleza. 
            Un lugar perfecto para disfrutar de la calma en pleno corazón de la ciudad.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://th.bing.com/th/id/OIP.APOK7e7inTC9x7XgKhg0sAHaE7?rs=1&pid=ImgDetMain" alt="Parque Retiro"
             />
            </div>
            </div>
            <a
            href={puertaSolDestino?.omsLink}
            target="_blank"
            rel="noopener noreferrer">
              <h5 className="destinos_turisticos">
            Puerta del Sol:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
            </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            La Puerta del Sol es el centro neurálgico de Madrid, desde donde se miden todas las distancias del país. 
            En sus inmediaciones encontrarás algunos de los puntos más emblemáticos de la ciudad, como el Kilómetro Cero, 
            la estatua del Oso y el Madroño y la famosa Casa de Correos. La Plaza está llena de vida, con tiendas, cafés y turistas que disfrutan del ambiente. 
            Es el lugar ideal para comenzar tu recorrido por la ciudad.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://th.bing.com/th/id/OIP.MXuiEqgn9s_SDNXIAM60JAHaE8?rs=1&pid=ImgDetMain" alt="Puerta Sol"
             />

            </div>
            
            

        </div>
        <a 
        href={granViaDestino?.omsLink}
        target="_blank"
        rel="noopener noreffer">
          <h5 className="destinos_turisticos">
          Gran Vía Madrid:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container">
            
            <div className="first_paragraph">
            <p>
            La Gran Vía es la arteria principal de Madrid, famosa por sus teatros, cines y edificios emblemáticos como el Edificio Telefónica. 
            A lo largo de esta animada calle encontrarás opciones para ir de compras, 
            disfrutar de un espectáculo o simplemente admirar la arquitectura. Su ambiente vibrante y su vida nocturna la convierten en uno de los lugares más visitados de la ciudad. 
            Un paseo por la Gran Vía te permitirá experimentar la esencia cosmopolita de Madrid
            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://th.bing.com/th/id/R.81dceb6c68b6b6528195e69c4d75cd03?rik=B%2bXKBT6R7eEfcw&riu=http%3a%2f%2fwww.pongamosquehablodemadrid.com%2fwp-content%2fuploads%2f2016%2f10%2fgran-via-de-madrid-vista-del-primer-tramo-desde-la-plaza-de-espana-hasta-la-plaza-del-callao.jpg&ehk=XRcr%2by7nV9u49OHVvjIBOGfWptinLnFazCnR6s3pUko%3d&risl=&pid=ImgRaw&r=0" alt="Gran Vía Madrid"
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