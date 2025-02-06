import React, {useState, useContext} from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import { Weather } from "../component/weather.jsx";
import {CommentBox} from "../component/comment.jsx";
import '../../styles/destinos_ciudades.css';

export const Bangkok =() => {
    const [showWeather, setShowWeather ]= useState (false);
    const {store, actions} = useContext(Context);

    useEffect (()=>{
        if (showWeather && (!store.weather || store.weather.location !== "Bangkok")){
            actions.getWeather("Bangkok");
    }
}, [showWeather]);
const toggleWeather=() =>{
   setShowWeather(!showWeather);
};

const bangkokDestino = store.destinos.find((destino) => destino.nombre === "Bangkok")
const granPalacioDestino = store.destinos.find((destino) => destino.nombre === "Palacio")
const watArunDestino = store.destinos.find((destino) => destino.nombre === "Wat Arun")
const KhaoDestino = store.destinos.find((destino) => destino.nombre === "Khao San")
const flotanteDestino = store.destinos.find((destino) => destino.nombre === "Mercado flotante")
const maeKlongDestino = store.destinos.find((destino) => destino.nombre === "Mae Klong")
return(
    <div>
     
      <div className="container">
        <h4 className="city_destinos d-flex">
            <span className="ba_word">BA</span>
            <span className="n_word">N</span>
            <span className="g_word">G</span>
            <span className="k_word">K</span>
            <span className="ok_word">OK</span>
            
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
                  href={bangkokDestino?.omsLink}
                  target="_blank"
                  rel= "noopener noreferrer">
                    <i className="mapa_icono_ciudad fa-regular fa-map" />
                  </a>

                </li>
            </ul>
          

        </div>
       
            {showWeather &&  store.weather && (
                <div className= "weather-container">
                    {showWeather && <Weather city = "Bangkok" />}
            
        </div>
        )}
      </div>
      <div className="container descripcion_ciudades">
            <h3>
                Qué no puedes perderte de Bangkok
            </h3>
            <p>
            Bangkok, la vibrante capital de Tailandia, combina templos dorados, rascacielos modernos y una animada vida callejera. 
            Su icónico Gran Palacio y el templo Wat Arun reflejan su riqueza cultural, mientras que sus mercados flotantes y la gastronomía callejera deleitan a los viajeros. 
            La ciudad ofrece una mezcla única de tradición y modernidad, con bulliciosos tuk-tuks y lujosos centros comerciales. Es un destino imperdible para quienes buscan historia, aventura y sabores exóticos
            <br/>
            Te contamos lo imprescindible de Bangkok:
            </p>
            <a
            href={granPalacioDestino?.omsLink}
            target="_blank"
            rel="noopener noreferrer"
            >
            <h5 className="destinos_turisticos">
              Gran Palacio:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
            </a>
           <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            Este complejo real deslumbra con su arquitectura dorada y detalles ornamentados. 
            En su interior se encuentra el sagrado Buda Esmeralda, una de las imágenes más veneradas de Tailandia. 
            Es un sitio imprescindible para conocer la historia y cultura tailandesa.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://th.bing.com/th/id/R.38a45780815df292baef0fdda4951085?rik=1MGjEvOOo0aqww&pid=ImgRaw&r=0" alt="Gran Palacio"
             />

            </div>
            

        </div>
        <a 
        href={watArunDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
        <h5 className="destinos_turisticos">
              Wat Arun:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
            </a>
           <div className="container-ciudades">
            <div className="first_paragraph">
            <p>
            Si estás en Bangkok, no puedes dejar de visitar Wat Arun, uno de los templos más icónicos de Tailandia. 
            Conocido como el "Templo del Amanecer", su imponente torre (prang), decorada con porcelana china, se eleva a 79 metros de altura, 
            ofreciendo vistas espectaculares del río Chao Phraya y la ciudad. Su belleza se resalta especialmente al amanecer o al atardecer, 
            cuando la luz dorada resalta su estructura única. Además de su impresionante arquitectura, el templo tiene un ambiente tranquilo que te invita a reflexionar. 
            Puedes subir hasta la cima para disfrutar de una vista panorámica de la ciudad y sus alrededores. ¡Una visita a Wat Arun es una experiencia 
            imperdible que te conecta con la espiritualidad y la historia de Bangkok!.

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e8dfd394-a826-435c-85c4-571af5ee8f4e/df9s7a4-0e681cd7-407a-4c9f-94c7-cf416b43e0a4.jpg/v1/fill/w_894,h_894,q_70,strp/wat_arun_sunset_by_manjikpictures_df9s7a4-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2U4ZGZkMzk0LWE4MjYtNDM1Yy04NWM0LTU3MWFmNWVlOGY0ZVwvZGY5czdhNC0wZTY4MWNkNy00MDdhLTRjOWYtOTRjNy1jZjQxNmI0M2UwYTQuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Y1Kyfmfj7nq4UfsxDJOJ9Dllm0q2_rHpAR-J3CkhqaY" alt="Wat Arun"
             />

            </div>
            
            

        </div>
        <div className="container-ciudades">
        <a
        href={KhaoDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
        <h5 className="destinos_turisticos">
              Khao San Road y mercados nocturnos:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
            </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            Si buscas el corazón vibrante de Bangkok, Khao San Road es el lugar ideal para ti. 
            Esta famosa calle, conocida como el epicentro mochilero de la ciudad, está llena de bares, 
            restaurantes, tiendas y un ambiente lleno de energía. Desde sabrosos platos de comida tailandesa 
            en la calle hasta música en vivo y mercados nocturnos, Khao San ofrece una mezcla perfecta de diversión, 
            cultura y socialización. Ya sea que busques hacer nuevos amigos, probar la comida local o simplemente 
            disfrutar del bullicio, esta calle nunca deja de sorprender a los viajeros. 
            ¡Es el lugar perfecto para vivir la verdadera esencia de Bangkok!

            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://detailandia.com/wp-content/uploads/2018/07/Khao-San-Road-Bangkok-Por-la-noche.jpg" alt="Khao San Road"
             />

            </div>
            </div>
            <a
            href={flotanteDestino?.omsLink}
            target="_blank"
            rel="noopener noreferrer">
              <h5 className="destinos_turisticos">
            Mercado flotante:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
            </a>
           <div className="container-ciudades">
            
            <div className="first_paragraph">
            <p>
            
            El mercado flotante de Bangkok es una de las experiencias más auténticas de Tailandia. 
            En canales rodeados de casas tradicionales, vendedores en pequeñas barcas ofrecen frutas tropicales, platos típicos y artesanías. 
            Los más famosos son Damnoen Saduak (el más turístico) y Amphawa (más local y animado por la noche). 
            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://eczmdpbos8k.exactdn.com/wp-content/uploads/2022/02/market-g2beb96d0c_1920.jpg?strip=all&lossy=0&webp=90&w=2560&ssl=1" alt=" Mercado flotante"
             />

            </div>
            
            

        </div>
        <a
        href={maeKlongDestino?.omsLink}
        target="_blank"
        rel="noopener noreferrer">
          <h5 className="destinos_turisticos">
            Mae Klong:
            </h5>
            <i className="mapa_icono_ciudad fa-regular fa-map" />
        </a>
           <div className="container">
            
            <div className="first_paragraph">
            <p>
            No puedes perderte el mercado de Mae Klong, uno de los más sorprendentes del país. 
            Este mercado, ubicado en la provincia de Samut Songkhram, tiene una característica fascinante: 
            cada vez que el tren pasa por la vía, los vendedores deben retirar rápidamente sus productos y 
            sombrillas para dar paso al tren. El bullicio, los colores vibrantes de los productos frescos y 
            la emoción de ver cómo se ajustan las mercancías a medida que el tren se aproxima, 
            crean una atmósfera única que hace que este lugar sea imprescindible en tu viaje. 
            ¡Es una experiencia que no encontrarás en ningún otro mercado del mundo!
            </p>
            <img className="imagenes_destinos_turisticos" 
            src="https://th.bing.com/th/id/OIP.roIYMNNZzUYaJarwQXAEAwHaE8?rs=1&pid=ImgDetMain" alt=" Mae Klong"
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
