import React, {useContext} from "react";
import { Context } from "../store/appContext";
import '../../styles/destinos.css'
import { Navbar } from "../component/navbar";


export const Asia =()=>{
    const {store, actions} = useContext(Context);
    return(
        
        <div className="backGroundAsia d-flex">
            <div className=" tailandia-title d-flex">
                
                <span className="ta_word"><p>TA</p></span>
                <span className="il_word"><p>IL</p></span>
                <span className="a_word"><p>A</p></span>
                <span className="nd_word"><p>ND</p></span>
                <span className="ia_word"><p>IA</p></span>
               
                
            </div>
        <div className="row d-flex text-center">
            
            <div className="col">
            <div className="image-wrapper">
               <p className="city-name">
               Krabi
                </p> 
            <img className="cities_img" src="https://lh5.googleusercontent.com/proxy/3UATxwexRPFM72C6-fzuLn2-34AFXlJthVzR6OKIpR932nhCthXe8KTAH37XgfUO48Zfu3aEgeBJtS27dwa-nygZ9ZEUpJc9cDUqUMBAWIdZJ5GcgkBmM4gBBvMypHhwDN71jGxBcvQt88DAV1P3kcrYrJ6s0g=w540-h312-n-k-no" />
            </div>
            </div>
            <div className="col">
            <div className="image-wrapper">
               <p className="city-name">
                Bangkok
                 </p>
                <img className="cities_img" src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQF9sBKWwybUuqYa96UYnDmRCKawmKRhKhxGOubI1O4gTaP78JZTSN1xvtssrKvcGNkWaTldx-jeVpXJzO6ttgeaoPty66adoYBbhUvOg" />
            </div>
            </div>
            <div className="col">
            <div className="image-wrapper">
                <p className="city-name">Ayuttayah</p>
            <img className="cities_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8WCbRzW4sMStT4uy2iWDCKhB9wgT1pfi8Rw&s" />
            </div>
            </div>

        </div>
    </div>
    
    )

}