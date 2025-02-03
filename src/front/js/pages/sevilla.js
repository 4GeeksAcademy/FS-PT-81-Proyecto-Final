import React, { useState, useContext } from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Weather } from "../component/weather.jsx";
import { CommentBox } from "../component/comment.jsx";
import '../../styles/destinos_ciudades.css';

export const Sevilla = () => {
  const [showWeather, setShowWeather] = useState(false);
  const { store, actions } = useContext(Context); // Accede al contexto

  useEffect(() => {
    if (showWeather && (!store.weather || store.weather.location.name !== "Sevilla")) {
      actions.getWeather("Sevilla"); // Llama a la acción getWeather al activar el clima
    }
  }, [showWeather]); // Este efecto depende del estado showWeather

  const toggleWeather = () => {
    setShowWeather(!showWeather); // Alterna entre mostrar y ocultar el clima
  };

  const sevillaDestino = store.destinos.find((destino) => destino.nombre === "Sevilla")
  const giraldaDestino = store.destinos.find((destino) => destino.nombre === "Giralda")
  const catedralDestino = store.destinos.find((destino) => destino.nombre === "Catedral")
  const alcazarDestino = store.destinos.find((destino) => destino.nombre === "Alcazar")
  const plazaEspañaDestino = store.destinos.find((destino) => destino.nombre === "Plaza España")
  const barrioTrianaDestino = store.destinos.find((destino) => destino.nombre === "Barrio Triana")
  return (
    <div>
      

      <div className="container">
        <h4 className="city_destinos d-flex">
          <span className="se_word"><p>SE</p></span>
          <span className="vil_word"><p>VIL</p></span>
          <span className="la_word"><p>LA</p></span>
        </h4>

        <div className="list">
          <ul>

            <li onClick={toggleWeather} style={{ cursor: "pointer" }}>
            <p className="tiempo">
                    Metereología
                    </p>
            </li>
            <li>
              <a
                href={sevillaDestino?.omsLink}
                target="_blank"
                rel="noopener noreferrer">
                <i className="mapa_icono_ciudad fa-regular fa-map" />
              </a>
            </li>
          </ul>



        </div>

        {showWeather && store.weather && (
          <div className="weather-container">
            {showWeather && <Weather city="Sevilla" />}

          </div>
        )}
      </div>
      <div className="container descripcion_ciudades">
        <h3>
          Qué no puedes perderte de Sevilla
        </h3>
        <p>
        Sevilla es una ciudad vibrante y llena de historia, donde la esencia andaluza cobra vida entre sus calles adoquinadas, 
        flamenco apasionado y exquisita gastronomía. Desde la majestuosa Catedral y la icónica Giralda hasta los encantadores barrios de Triana y Santa Cruz, 
        cada rincón ofrece una experiencia única. Sus atardeceres en la Plaza de España y paseos por el río Guadalquivir te envolverán en su magia. ¡Descubre Sevilla y déjate seducir por su arte, cultura y alegría inigualable!
          Te contamos lo imprescindible de Sevilla:
        </p>
        <a
          href={giraldaDestino?.omsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5 className="destinos_turisticos">
            La Giralda de Sevilla: 
          </h5>
          <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
        <div className="container-ciudades">
          <div className="first_paragraph">
            <p>
              La Giralda es uno de los emblemas más icónicos de Sevilla. Esta torre, que originalmente fue construida como minarete para la mezquita de la ciudad,
              ofrece unas vistas impresionantes de la capital andaluza. Su arquitectura única, que mezcla estilos islámico y renacentista, la convierte en una visita imprescindible.
              No te pierdas la oportunidad de subir y disfrutar de las panorámicas de la ciudad..

            </p>
            <img className="imagenes_destinos_turisticos"
              src="https://sooluciona.com/wp-content/uploads/2022/08/Los-municipios-m%C3%A1s-grandes-de-Sevilla-1024x658.jpg" alt="Giralda de Sevilla"
               />

          </div>


        </div>
        <a
          href={catedralDestino?.omsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5 className="destinos_turisticos" >
            La Catedral de Sevilla: 
          </h5>
          <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
        <div className="container-ciudades">
          <div className="first_paragraph">
            <p>
              Considerada la catedral gótica más grande del mundo, la Catedral de Sevilla es un tesoro histórico.
              En su interior, además de la impresionante arquitectura y detalles ornamentales, podrás encontrar la tumba de Cristóbal Colón.
              La visita a este monumento es una inmersión profunda en la historia de Sevilla, su religión y su cultura.

            </p>
            <img className="imagenes_destinos_turisticos"
              src="https://4.bp.blogspot.com/-Fr30EgWGGa4/WgL1y3ciKRI/AAAAAAAAB5s/krXRxu2SWowrHdTgsu9CqI2yRGnc9FoogCLcBGAs/s1600/catedral.jpg" alt="Catedral Sevilla"
               />

          </div>



        </div>
        <a
          href={alcazarDestino?.omsLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5 className="destinos_turisticos" >
            El Alcázar de Sevilla: 
          </h5>
          <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
        <div className="container-ciudades">
        <div className="container-ciudades">

          <div className="first_paragraph">
            <p>
              El Alcázar de Sevilla es un palacio real que combina a la perfección arquitectura islámica, mudéjar, gótica, renacentista y barroca.
              Sus jardines llenos de fuentes y exuberante vegetación lo hacen aún más fascinante. Este lugar fue escenario de la serie Juego de Tronos,
              lo que lo convierte también en un atractivo para los fans de la famosa saga.

            </p>
            <img className="imagenes_destinos_turisticos"
              src="https://th.bing.com/th/id/OIP.MvDEFznExruS20CJoVLX1gHaE5?rs=1&pid=ImgDetMain" alt="Alcázar Sevilla "
               />
 </div>
          </div>
          <a
            href={plazaEspañaDestino?.omsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5 className="destinos_turisticos" >
              Plaza de España: 
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
          </a>
          <div className="container-ciudades">

            <div className="first_paragraph">
              <p>

                La Plaza de España, ubicada en el Parque de María Luisa, es un impresionante ejemplo de la arquitectura regionalista andaluza.
                Con su forma semicircular y rodeada por canales, esta plaza es uno de los lugares más emblemáticos de la ciudad.
                Asegúrate de pasear por sus puentes, donde podrás disfrutar del ambiente único de Sevilla.
              </p>
              <img className="imagenes_destinos_turisticos"
                src="https://thumbs.dreamstime.com/b/sonnenuntergang-sevillas-plaza-de-espana-andalusian-sevilla-80869685.jpg" alt=" Plaza España"
                 />

            </div>



          </div>
          <a
            href={barrioTrianaDestino?.omsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5 className="destinos_turisticos">
              Barrio de Triana: 
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
          </a>
          <div className="container">

            <div className="first_paragraph">
              <p>
                Triana es un barrio tradicionalmente conocido por su vibrante ambiente, su cerámica y su relación con el flamenco.
                Situado a orillas del río Guadalquivir, este pintoresco barrio es perfecto para perderse en sus calles adoquinadas,
                probar tapas en sus bares y disfrutar de la auténtica esencia sevillana.
              </p>
              <img className="imagenes_destinos_turisticos"
                src="https://th.bing.com/th/id/R.509a722337f97183c49aff7460b07bdb?rik=OEy83%2fN%2f0LTkbA&pid=ImgRaw&r=0" alt=" Barrio Triana"
                 />

            </div>



          </div>
        </div>



      </div>
      <div className="box-comment container">
        < CommentBox />
      </div>
    </div>
  );
};
