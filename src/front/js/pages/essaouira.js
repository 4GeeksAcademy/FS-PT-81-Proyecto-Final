               import React, {useState, useContext} from "react";
              import { useEffect } from "react";
              import { Context } from "../store/appContext";
              import { Weather } from "../component/weather.jsx";
              import {CommentBox} from "../component/comment.jsx";
              import '../../styles/destinos_ciudades.css';
        
              export const Essaouira =() => {
                  const [showWeather, setShowWeather ]= useState (false);
                  const {store, actions} = useContext(Context);
        
                  useEffect (()=>{
                      if (showWeather && (!store.weather || store.weather.location !== "Essaouira")){
                          actions.getWeather("Essaouira");
                  }
              }, [showWeather]);
              const toggleWeather=() =>{
                setShowWeather(!showWeather);
        
              };
              const essaouiradestino = store.destinos.find((destino)=> destino.nombre === "Essaouira")
              const puertoEssaouiraDestino = store.destinos.find((destino)=> destino.nombre === "Puerto Essaouira")
              const playaEssaouiraDestino = store.destinos.find((destino)=> destino.nombre === "Playa Essaouira")
              const skalaKabahDestino = store.destinos.find((destino)=> destino.nombre === "Skala Kabah")
              const souksDestino = store.destinos.find((destino)=> destino.nombre === "Souks")
              const medinaDestino = store.destinos.find((destino)=> destino.nombre === "Medina")
              return(
            <div>
             
              <div className="container">
              <h4 className="city_destinos d-flex">
                    <span className="ess_word">ESS</span>
                    <span className="aou_word">AOU</span>
                    <span className="ira_word">IRA</span>
                   
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
                       href={essaouiradestino?.omsLink}
                       target="_blank"
                       rel="noopener noreferrer">
                         <i className="mapa_icono_ciudad fa-regular fa-map" />
                       </a>
                        
        
                        </li>
                    </ul>
                    {showWeather &&  store.weather && (
                                    <div className= "weather-container">
                                        {showWeather && <Weather city = "Essaouira" />}
                                
                            </div>
                            )}
                    <div className="container descripcion_ciudades">
                    <h3>
                        Qué no puedes perderte de Essaouira
                    </h3>
                    <p>
                    Essaouira es un encantador puerto costero de Marruecos conocido por su atmósfera relajada, su medina amurallada y su herencia multicultural. 
                    Sus calles empedradas están llenas de coloridos mercados, arte local y olores a especias y pescado fresco.
                    Es el destino perfecto para disfrutar de playas tranquilas, practicar kitesurf y explorar fortalezas históricas frente al Atlántico. 
                    El ambiente bohemio de Essaouira ha inspirado a artistas durante siglos. No te pierdas sus atardeceres dorados y el bullicio de su puerto pesquero, 
                    donde la autenticidad y la belleza se entrelazan en cada rincón.
                    <br/>
                    Te contamos lo imprescindible de Essaouira:
                    </p>
                   <a 
                   href={puertoEssaouiraDestino?.omsLink}
                   target="_blank"
                   rel="noopener noreferrer">
                     <h5 className="destinos_turisticos">
                     Puerto de Essaouira y murallas:
                    </h5>
                    <i className="mapa_icono_ciudad fa-regular fa-map" />
                   </a>
                  
                  <div className="container-ciudades">
                    <div className="first_paragraph">
                    <p>
                    El puerto pesquero de Essaouira es un espectáculo lleno de color y actividad. 
                    Los barcos de madera azul se balancean suavemente mientras los pescadores descargan su captura diaria. 
                    Alrededor del puerto, las murallas fortificadas ofrecen vistas panorámicas impresionantes del Atlántico. 
                    Es el lugar perfecto para degustar pescado fresco en uno de los pequeños puestos de comida local. Además, 
                    la energía del puerto muestra la conexión de Essaouira con el océano. Es un lugar ideal para entender la historia y 
                    el presente de esta ciudad marítima.
                   
        
                    </p>
                    <img className="imagenes_destinos_turisticos" 
                    src="https://misjago.pl/wp-content/uploads/sykon-img/202112031516540.WP+maroko+12.jpg" alt="Puerto de Essaouira"
                     />
        
                    </div>
                    
        
                </div>
                <a
                href={playaEssaouiraDestino?.omsLink}
                target="_blank"
                rel="noopener noreferrer">
                  <h5 className="destinos_turisticos">
                      Playa de Essaouira:
                    </h5>
                    <i className="mapa_icono_ciudad fa-regular fa-map" />
                </a>
                
                   <div className="container-ciudades">
                    <div className="first_paragraph">
                    <p>
                    La playa de Essaouira, con su extensa franja de arena dorada y constante brisa marina, 
                    es un paraíso para los amantes de los deportes acuáticos como el kitesurf y windsurf. 
                    Sin embargo, también es perfecta para pasear al atardecer o simplemente relajarse bajo el sol. 
                    Con una atmósfera tranquila, esta playa combina perfectamente el ambiente relajado de la ciudad con la belleza del Atlántico. 
                    Alrededor, encontrarás cafeterías y restaurantes con vistas increíbles al mar. Es un rincón ideal para descansar 
                    y disfrutar de la serenidad costera.
        
                    </p>
                    <img className="imagenes_destinos_turisticos" 
                    src="https://images.lonelyplanetitalia.it/uploads/4dG6Dm6jliYlPvty3qQnUKio2FjzTPQm.jpg?q=80&p=slider&s=3de84c8ec68226320210132a260b0bd0" alt="Playa de Essaouira"
                     />
        
                    </div>
                    
                    
        
                </div>
                <div className="container-ciudades">
                <a
                href={skalaKabahDestino?.omsLink}
                target="_blank"
                rel="noopener noreferrer">
                  <h5 className="destinos_turisticos">
                  Skala de la Kabah:
                    </h5>
                    <i className="mapa_icono_ciudad fa-regular fa-map" />
                </a>
                   <div className="container-ciudades">
                    
                    <div className="first_paragraph">
                    <p>
                    La Skala de la Kasbah es una impresionante fortificación que protegía Essaouira de invasiones marítimas. 
                    Desde sus torres y cañones, las vistas al océano Atlántico y la costa rocosa son espectaculares. 
                    Este lugar te transporta al pasado, con una atmósfera histórica que evoca las aventuras de piratas y comerciantes. 
                    Además, es un excelente punto para tomar fotografías memorables. Pasear por la Skala es un imprescindible para cualquier viajero, 
                    uniendo historia, arquitectura y paisajes inigualables. 
        
                    </p>
                    <img className="imagenes_destinos_turisticos" 
                    src="https://media02.stockfood.com/largepreviews/MjE4MTMxNzgyMQ==/70365091-Africa-Maghreb-North-africa-Morocco-Essaouira-city-walls.jpg" alt="Skala Kabah"
                     />
                    </div>
                    </div>
                    <a
                    href={souksDestino?.omsLink}
                    target="_blank"
                    rel="noopener noreferrer">
                      <h5 className="destinos_turisticos">
                    Souks y artesanías:
                    </h5>
                    <i className="mapa_icono_ciudad fa-regular fa-map" />
                    </a>
                   <div className="container-ciudades">
                    
                    <div className="first_paragraph">
                    <p>
                    Los souks de Essaouira son una ventana a la riqueza cultural de Marruecos. 
                    Aquí encontrarás alfombras tejidas a mano, joyas de plata bereber, cerámica pintada y especias aromáticas. 
                    El ambiente es vibrante, con comerciantes amables dispuestos a compartir historias sobre sus productos. 
                    Estos mercados son el lugar perfecto para comprar recuerdos únicos y auténticos. Además, es una oportunidad de conocer más sobre las técnicas tradicionales de artesanía. 
                    Caminar por los souks es una experiencia imprescindible para quienes buscan llevarse un pedazo de Essaouira consigo.
        
                    </p>
                    <img className="imagenes_destinos_turisticos" 
                    src="https://www.thetraveler.net/images/incontournables/maroc-essaouira-souk.jpg" alt="Souks"
                     />
        
                    </div>
                    
                    
        
                </div>
                <a 
                href={medinaDestino?.omsLink}
                target="_blank"
                rel="noopener noreffer">
                  <h5 className="destinos_turisticos">
                  La Medina:
                    </h5>
                    <i className="mapa_icono_ciudad fa-regular fa-map" />
                </a>
                   <div className="container">
                    
                    <div className="first_paragraph">
                    <p>
                    La Medina de Essaouira, declarada Patrimonio de la Humanidad por la UNESCO, es un laberinto de callejuelas encantadoras llenas de vida. 
                    Sus paredes blancas con puertas azules reflejan la esencia de esta ciudad costera. Aquí encontrarás pequeñas tiendas de artesanía local, 
                    galerías de arte y cafeterías tradicionales. Cada rincón tiene algo que contar, desde su arquitectura histórica hasta su vibrante cultura. 
                    Perderse en la Medina es una experiencia sensorial, con aromas a especias y el sonido de músicos locales. 
                    Sin duda, es el corazón palpitante de Essaouira.
                    </p>
                    <img className="imagenes_destinos_turisticos" 
                    src="https://datviettour.com.vn/uploads/images/tin-tuc-SEO/tin-tong-hop/du-lich-nuoc-ngoai/maroc.jpg" alt="La Medina"
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