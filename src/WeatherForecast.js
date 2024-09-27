import React,{useState} from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast (props){
    let [loaded,setLoaded]=useState(false);
    let[forecast,setForecast]=useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setForecast(response.data.daily);
        setLoaded(true);
      }
    
      if (loaded){
        return (
         <div>
            <div className="WeatherForecast-day"> {props.data.dt} </div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
              <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">{forecast[0].temp.max}°</span>
                <span className="WeatherForecast-temperature-min">{forecast[0].temp.min}°</span>
              </div>
          </div>
      );
    } else {
      let apiKey = "dff5c692192605ee5ed7f95b423ae857";
      let longitude = props.coordinates.lon;
      let latitude = props.coordinates.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
      axios.get(apiUrl).then(handleResponse);
    }
}