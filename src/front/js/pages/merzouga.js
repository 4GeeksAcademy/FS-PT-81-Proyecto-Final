
      import React, {useState, useContext} from "react";
      import { useEffect } from "react";
      import { Context } from "../store/appContext";
      import { Weather } from "../component/weather.jsx";
      import {CommentBox} from "../component/comment.jsx";
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
      const merzougaestino = store.destinos.find((destino)=> destino.nombre === "Merzouga")
      const dunasErgChebbiDestino = store.destinos.find((destino)=> destino.nombre === "Dunas Erg Chebbi")
      const paseosCamellosDestino = store.destinos.find((destino)=> destino.nombre === "Paseos camello")
      const lagoDayetDestino = store.destinos.find((destino)=> destino.nombre === "Lago Dayet")
      const pobladoKhamliaDestino = store.destinos.find((destino)=> destino.nombre === "Pueblo Khamlia")
      const nocheDesiertoDestino = store.destinos.find((destino)=> destino.nombre === "Noche Desierto")
      return(
    <div>
     
      <div className="container">
      <h4 className="city_destinos d-flex">
            <span className="mer_word">MER</span>
            <span className="zou_word">ZOU</span>
            <span className="ga_word">GA</span>
           
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
               href={merzougaestino?.omsLink}
               target="_blank"
               rel="noopener noreferrer">
                 <i className="mapa_icono_ciudad fa-regular fa-map" />
               </a>
                

                </li>
            </ul>
            {showWeather &&  store.weather && (
                            <div className= "weather-container">
                                {showWeather && <Weather city = "Merzouga" />}
                        
                    </div>
                    )}
            <div className="container descripcion_ciudades">
            <h3>
                Qué no puedes perderte de Merzouga
            </h3>
            <p>
            Merzouga es la puerta de entrada al desierto del Sáhara, hogar de las imponentes dunas de Erg Chebbi. 
            Este pequeño pueblo bereber ofrece aventuras inolvidables, como paseos en camello al amanecer, 
            noches bajo cielos estrellados y el cálido encanto de campamentos tradicionales en el desierto. 
            Rodeado de paisajes espectaculares, es un lugar para desconectar, disfrutar del silencio absoluto y 
            maravillarte con la naturaleza en su máxima expresión. Merzouga promete una experiencia auténtica, 
            enriquecida con la cultura nómada y la mágica serenidad del Sáhara.
            <br/>
            Te contamos lo imprescindible de Merzouga:
            </p>
           <a 
           href={dunasErgChebbiDestino?.omsLink}
           target="_blank"
           rel="noopener noreferrer">
             <h5 className="destinos_turisticos">
             Las Dunas de Erg Chebbi:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
           </a>
          
          <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            Las dunas de Erg Chebbi son el alma de Merzouga y uno de los paisajes más impresionantes del desierto del Sáhara. 
            Con alturas que alcanzan los 150 metros, estas dunas doradas parecen sacadas de un sueño. 
            Los tonos cambiantes de la arena al amanecer y al atardecer son un espectáculo que corta la respiración. 
            Explorar este mar de arena, ya sea a pie o en vehículo todoterreno, es una experiencia inolvidable. 
            Además, su inmensidad y silencio absoluto invitan a la reflexión y la paz. 
            Erg Chebbi es un lugar único que te conectará con la naturaleza en su forma más pura.
           

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://th.bing.com/th/id/R.055713a174d88ce967a44417bafe42ba?rik=Ao9UbOzcKrs%2bsA&riu=http%3a%2f%2felviajerofeliz.com%2fwp-content%2fuploads%2f2016%2f01%2f0.png&ehk=plfK42wOcSpqceuwxYO5NoPwYk%2fA3vvL4%2bpApWZpwr8%3d&risl=&pid=ImgRaw&r=0" alt="Dunas Erg Chebbi"
             />

            </div>
            

        </div>
        <a
        href={paseosCamellosDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          <h5 className="destinos_turisticos">
              Paseos en camellos al amanecer y atardecer:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
        
           <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            Un paseo en camello por las dunas de Merzouga es la forma más auténtica de explorar el desierto. 
            Con cada paso lento, sentirás el encanto del Sáhara mientras te envuelven los tonos dorados y naranjas del sol naciente o poniente. 
            Es una experiencia que te conecta con siglos de tradición nómada. La calma del desierto y los paisajes infinitos son incomparables.
             Al llegar a la cima de una duna, las vistas son simplemente mágicas. Este recorrido no solo es una aventura, 
             sino un viaje espiritual que te dejará recuerdos inolvidables.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/b2/c9/80.jpg" alt="Paseos camello"
             />

            </div>
            
            

        </div>
        <div className="container-ciudades">
        <a
        href={lagoDayetDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          <h5 className="destinos_turisticos">
          Lago Dayet Srij:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            El lago Dayet Srji es un oasis sorprendente en medio del desierto que cobra vida durante los meses lluviosos. 
            Es un lugar perfecto para observar flamencos y otras aves migratorias que llegan en busca de agua. 
            Rodeado por las dunas de Erg Chebbi, este lago crea un contraste impresionante entre el desierto árido y la vida que lo rodea. 
            Caminar por sus orillas es un momento de tranquilidad y contemplación. También es ideal para los amantes de la fotografía, 
            ya que el paisaje es tan único como espectacular. 

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://live.staticflickr.com/8594/16673462311_74922d6678.jpg" alt="Lago Dayet"
             />
            </div>
            </div>
            <a
            href={pobladoKhamliaDestino?.omsLink}
            target="_blank"
            rel="noopener noreferrer">
              <h5 className="destinos_turisticos">
            Poblado Khamlia y música Gnawa:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
            </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            El pequeño poblado de Khamlia es conocido por su comunidad de origen subsahariano y su rica tradición musical. 
            Aquí puedes disfrutar de la música Gnawa, una mezcla de ritmos africanos y bereberes que cuenta historias ancestrales. 
            Las actuaciones son vibrantes y profundamente conmovedoras, transportándote a otra época. 
            Además, el pueblo ofrece una experiencia auténtica de la vida cotidiana en el desierto. Los locales son cálidos y hospitalarios, siempre dispuestos a compartir su cultura y costumbres. 
            Khamlia es una parada cultural imprescindible en Merzouga.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://viajes360marruecos.com/blog/wp-content/uploads/2021/01/pueblo-de-khamlia-marruecos-1.jpg" alt="Pueblo Khamlia"
             />

            </div>
            
            

        </div>
        <a 
        href={nocheDesiertoDestino?.omsLink}
        target="_blank"
        rel="noopener noreffer">
          <h5 className="destinos_turisticos">
          Noche en una noche en el desierto:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container">
            
            <div className="first_paragraph">
            <p>
            Pasar una noche en un campamento en las dunas de Merzouga es una experiencia mágica. 
            Dormir bajo un cielo estrellado que parece infinito es algo que nunca olvidarás. 
            Las jaimas tradicionales bereberes ofrecen comodidad mientras te sumerges en la atmósfera del desierto. 
            Alrededor de la fogata, podrás disfrutar de música tradicional, historias locales y la serenidad única del Sáhara. 
            El amanecer al despertar entre las dunas es el broche de oro para esta experiencia única. Es la manera perfecta de conectar con la inmensidad y la belleza del desierto.
            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://luciasecasa.com/wp-content/uploads/2022/02/luna-de-miel-en-el-desierto-del-sahara-2-1.jpg" alt="Noche Desierto"
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