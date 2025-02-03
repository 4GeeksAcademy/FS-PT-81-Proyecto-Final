import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Weather = ({ city }) => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (city) actions.getWeather(city); 
  }, [city]);

  const weather = store.weather;

  if (!weather) {
    return <p>Cargando datos del clima...</p>;
  }

  if (!weather || !weather.location){
    return <p>No hay datos disponibles para el cimla. Intenta de nuevo</p>
  }

  if (!weather.current) {
    return <p>Error cargando los datos. Intenta nuevamente.</p>;
  }

  return (
    <div>
      <h3>Clima en {city}</h3>
      <p>Temperatura: {weather.current.temperature}°C</p>
      <p>Sensación térmica: {weather.current.feelslike}°C</p>
      <p>Humedad: {weather.current.humidity}%</p>
      <p>Condición: {weather.current.weather_descriptions[0]}</p>
      <img
        src={weather.current.weather_icons[0]}
        alt="Condición climática"
        style={{ width: "50px", height: "50px" }}
      />
    </div>
  );
};
