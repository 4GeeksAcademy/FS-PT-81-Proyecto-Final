import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import '../../styles/destinos.css';

export const Europa = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  
  const destinosEuropa = store.destinos.filter(destino => destino.region === "Europa");

  return (
    <div className="backGroundSpain d-flex">
      <div className="españa-title d-flex">
        <span className="es_word"><p>ES</p></span>
        <span className="pa_word"><p>PA</p></span>
        <span className="ña_word"><p>ÑA</p></span>
      </div>
      <div className="row d-flex text-center">
        {destinosEuropa.map((destino, index) => (
          <div 
            className="col" 
            key={index} 
            onClick={() => destino.ruta && navigate(destino.ruta)} 
            style={{ cursor: "pointer" }}
          >
            <div className="image-wrapper">
              <p className="city-name">{destino.nombre}</p>
              <img className="cities_img" src={destino.imagen} alt={destino.nombre} />
            </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};
