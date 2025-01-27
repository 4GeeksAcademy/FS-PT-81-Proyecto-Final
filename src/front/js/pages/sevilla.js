import React, { useState , useContext} from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Weather } from "../component/weather.jsx";
import '../../styles/destinos_ciudades.css';

export const Sevilla = () => {
  const [showWeather, setShowWeather] = useState(false);
  const { store, actions } = useContext(Context); // Accede al contexto

  useEffect(() => {
    if (showWeather && (!store.weather|| store.weather.location.name !== "Sevilla")) {
      actions.getWeather("Sevilla"); // Llama a la acción getWeather al activar el clima
    }
  }, [showWeather]); // Este efecto depende del estado showWeather

  const toggleWeather = () => {
    setShowWeather(!showWeather); // Alterna entre mostrar y ocultar el clima
  };

  return (
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
        <h4 className="city_sevilla d-flex">
          <span className="se_word"><p>SE</p></span>
          <span className="vil_word"><p>VIL</p></span>
          <span className="la_word"><p>LA</p></span>
        </h4>

        <div className="list">
          <ul>
            <li>Puntos de interés</li>
            <li onClick={toggleWeather} style={{ cursor: "pointer" }}>
              Meteorología
            </li>
          </ul>
         <body className="city-body">
         <h3>
            ¿Qué no puedes perderte de Sevilla?
            </h3>
          <h6>
            La Catedral de sevilla
            </h6>
          <p>
            La Catedral de Sevilla es una maravilla arquitectónica que deja atónito a todo aquel que la contempla 
            <br>
            </br>
            sin duda es una de los valiosos edificios históricos que no puedes dejar de visitar en tu paso por Sevilla. 

          </p>
          <h6>
            La Giralda de Sevilla
          </h6>

          <p>
            La Giralda de Sevilla es una de las estructuras más emblemáticas de la ciudad y un símbolo de su historia
            <br>
            </br>
            Fue construida originalmente como el minaerete de la antigua mezquita almohade, la giralda ha sido testigo
            <br></br>
            la Giralda ha sido testigo de la transofrmación de Sevilla a lo largo de los siglos. Con sus 104 metros de altura,
            <br></br>
            es una de las torreas más altas de España.

          </p>
          <p>
            La Catedral de Sevilla es una maravilla arquitectónica que deja atónito a todo aquel que la contempla 
            <br>
            </br>
            sin duda es una de los valiosos edificios históricos que no puedes dejar de visitar en tu paso por Sevilla. 

          </p>
          <h6>
            La Giralda de Sevilla
          </h6>

          <p>
            La Giralda de Sevilla es una de las estructuras más emblemáticas de la ciudad y un símbolo de su historia
            <br>
            </br>
            Fue construida originalmente como el minaerete de la antigua mezquita almohade, la giralda ha sido testigo
            <br></br>
            la Giralda ha sido testigo de la transofrmación de Sevilla a lo largo de los siglos. Con sus 104 metros de altura,
            <br></br>
            es una de las torreas más altas de España.

          </p>
          <p>
            La Catedral de Sevilla es una maravilla arquitectónica que deja atónito a todo aquel que la contempla 
            <br>
            </br>
            sin duda es una de los valiosos edificios históricos que no puedes dejar de visitar en tu paso por Sevilla. 

          </p>
          <h6>
            La Giralda de Sevilla
          </h6>

          <p>
            La Giralda de Sevilla es una de las estructuras más emblemáticas de la ciudad y un símbolo de su historia
            <br>
            </br>
            Fue construida originalmente como el minaerete de la antigua mezquita almohade, la giralda ha sido testigo
            <br></br>
            la Giralda ha sido testigo de la transofrmación de Sevilla a lo largo de los siglos. Con sus 104 metros de altura,
            <br></br>
            es una de las torreas más altas de España.

          </p>
          <p>
            La Catedral de Sevilla es una maravilla arquitectónica que deja atónito a todo aquel que la contempla 
            <br>
            </br>
            sin duda es una de los valiosos edificios históricos que no puedes dejar de visitar en tu paso por Sevilla. 

          </p>
          <h6>
            La Giralda de Sevilla
          </h6>

          <p>
            La Giralda de Sevilla es una de las estructuras más emblemáticas de la ciudad y un símbolo de su historia
            <br>
            </br>
            Fue construida originalmente como el minaerete de la antigua mezquita almohade, la giralda ha sido testigo
            <br></br>
            la Giralda ha sido testigo de la transofrmación de Sevilla a lo largo de los siglos. Con sus 104 metros de altura,
            <br></br>
            es una de las torreas más altas de España.

          </p>
          <p>
            La Catedral de Sevilla es una maravilla arquitectónica que deja atónito a todo aquel que la contempla 
            <br>
            </br>
            sin duda es una de los valiosos edificios históricos que no puedes dejar de visitar en tu paso por Sevilla. 

          </p>
          <h6>
            La Giralda de Sevilla
          </h6>

          <p>
            La Giralda de Sevilla es una de las estructuras más emblemáticas de la ciudad y un símbolo de su historia
            <br>
            </br>
            Fue construida originalmente como el minaerete de la antigua mezquita almohade, la giralda ha sido testigo
            <br></br>
            la Giralda ha sido testigo de la transofrmación de Sevilla a lo largo de los siglos. Con sus 104 metros de altura,
            <br></br>
            es una de las torreas más altas de España.

          </p>
         </body>

          
        </div>

        {showWeather && store.weather && (
          <div className="weather-container">
          {showWeather && <Weather city="Sevilla" />}

          </div>
        )}
      </div>
    </div>
  );
};
