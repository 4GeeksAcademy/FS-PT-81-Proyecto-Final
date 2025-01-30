import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import '../../styles/destinos.css'


export const Africa= ()=>{
    const {store} =useContext(Context);
    const navigate = useNavigate();

    const destinosAfrica = store.destinos.filter(destino => destino.region === "Africa");
    return(
        <div className="backGroundAfrica d-flex">
            <div className=" marruecos-title d-flex">
                
                <span className="mar_word"><p>MAR</p></span>
                <span className="rue_word"><p>RUE</p></span>
                <span className="cos_word"><p>COS</p></span>
                
                
            </div>
            <div className="row d-flex text-center">
        {destinosAfrica.map((destino, index) => (
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
    )
}