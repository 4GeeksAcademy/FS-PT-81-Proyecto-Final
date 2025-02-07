import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/destinos.css";
import { useNavigate } from "react-router-dom";

export const Asia = () => {
    const { store } = useContext(Context); // Consumir datos del store
    const navigate = useNavigate();

    
    const destinosAsia = store.destinos.filter(destino => destino.region === "Asia");

    return (
        <div className="backGroundAsia d-flex">
            <div className="tailandia-title d-flex">
                <span className="ta_word"><p>TA</p></span>
                <span className="il_word"><p>IL</p></span>
                <span className="a_word"><p>A</p></span>
                <span className="nd_word"><p>ND</p></span>
                <span className="ia_word"><p>IA</p></span>
            </div>
            <div className="row d-flex text-center">
        {destinosAsia.map((destino, index) => (
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
