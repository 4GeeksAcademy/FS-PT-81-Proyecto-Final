import React, {useContext} from "react";
import { Context } from "../store/appContext";
import '../../styles/destinos.css'
import { Navbar } from "../component/navbar";

export const Europa =()=>{
    const {store, actions} = useContext(Context);
    return(
        
        <div className="backGroundSpain d-flex">
            <div className=" españa-title d-flex">
                
                <span className="es_word"><p>ES</p></span>
                <span className="pa_word"><p>PA</p></span>
                <span className="ña_word"><p>ÑA</p></span>
                
            </div>
        <div className="row d-flex text-center">
            
        <div className="col">
  <div className="image-wrapper">
    <p className="city-name">Sevilla</p>
    <img className="cities_img" src="https://www.elcaminoconcorreos.com/imagenes-blog/67/que-ver-en-sevilla.jpg" alt="Sevilla" />
  </div>
</div>
<div className="col">
  <div className="image-wrapper">
    <p className="city-name">Barcelona</p>
    <img className="cities_img" src="https://cdn-imgix.headout.com/mircobrands-content/image/b299bd25f75c1e299c877fed458576fa-Sagrada%20Familia%20-%20Facades.jpg" alt="Barcelona" />
  </div>
</div>
<div className="col">
  <div className="image-wrapper">
    <p className="city-name">Madrid</p>
    <img className="cities_img" src="https://www.hotelpuertamerica.com/uploads/9/8/2/4/98249186/madrid_12.jpg" alt="Madrid" />
  </div>
</div>

        </div>
    </div>
    
    )

}