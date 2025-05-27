import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  let apiKey = "2d0a8749coc87c3f1a0at1425f4adb36";

  let latitude = props.coordinates.lat;
  let longitude = -props.coordinates.lon;
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <div>Icon</div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">18°</span>
            <span className="WeatherForecast-temperature-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
