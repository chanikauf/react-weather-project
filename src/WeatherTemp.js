import React from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  return (
    <div className="WeatherTemp">
      <img src={props.iconUrl} alt="Icon" className="weather-img" />
      <span className="temperature">{props.celsius}</span>
      <span className="unit">°C</span>
    </div>
  );
}
