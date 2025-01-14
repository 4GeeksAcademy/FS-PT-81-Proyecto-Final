import React, {useContext}from "react";
import { Context } from "../store/appContext";
import '../../styles/destinos.css'


export const Africa= ()=>{
    const {store, actions} =useContext(Context);

    return(
        <div className="backGroundAfrica d-flex">
            <div className=" tailandia-title d-flex">
                
                <span className="mar_word"><p>MAR</p></span>
                <span className="rue_word"><p>RUE</p></span>
                <span className="cos_word"><p>COS</p></span>
                
                
            </div>
        <div className="row d-flex text-center">
        <div className="col">
            <div className="image-wrapper">
               <p className="city-name">
                Marrakech
                 </p>
                <img className="cities_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImbTxAL38LSpvBuDOp1ywCf8IDhyqKrPIbw&s" />
            </div>
            </div>
            
            <div className="col">
            <div className="image-wrapper">
               <p className="city-name">
               Essaouira
        
                </p> 
            <img className="cities_img" src="https://www.freetour.com/images/tours/59421/essaouira-experience-small-group-day-trip-from-marrakech-01.jpg" />
            </div>
            </div>
           
            <div className="col">
            <div className="image-wrapper">
                <p className="city-name">Merzouga</p>
            <img className="cities_img" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/0e/ec/63.jpg" />
            </div>
            </div>

        </div>
    </div>
    )
}