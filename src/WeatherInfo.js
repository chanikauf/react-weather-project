import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";
import "./Weather.css";


export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            

            <WeatherTemp celsius={props.data.temperature} iconUrl={props.data.iconUrl}/>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: {props.data.precipitation}%</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {props.data.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}
