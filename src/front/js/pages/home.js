import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		
		<div className="backGroundHome d-flex">
		<div className="continents">
			<div>
			<Link to="/europa" style={{textDecoration:"none", color:"white"}}>
				<span>
				EUROPA
				</span>
				</Link>
				</div>
			<div>
			<Link to="/asia" style={{textDecoration:"none", color:"white"}}>
				<span>
				ASIA
				</span>
				</Link>
				</div>
			<div>
			<Link to="/africa" style={{textDecoration:"none", color:"white"}}>
				<span>
					
					ÁFRICA
					</span>
					</Link>
		</div>
		</div>

		</div>
	);
};
