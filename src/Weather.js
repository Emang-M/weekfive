import React,{useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css"

export default function Weather(props){
    let [weatherData, setWeatherData] = useState({ ready: false });
    let [loaded, setLoaded] = useState(false);
    let [city, setCity] = useState(props.city);

    function handleResponse(response) {
        console.log(response.data);
        setLoaded(true);
      setWeatherData({
        coordinates: response.data.coord,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
      });
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      let apiKey = "dff5c692192605ee5ed7f95b423ae857";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
      axios.get(apiUrl).then(handleResponse);
    }
  
    function handleCityChange(event) {
      setCity(event.target.value);
    }
  


   if(loaded) return (
        <div className="Weather">
            <form onSubmit={handleSubmit}> 
                <div className="row">
                    <div className="col-9"> 
                        <input 
                        type="Search"
                        placeholder="Enter a city.."
                        className="form-control"
                        autoFocus="on"
                        onChange={handleCityChange}
                        />
                        </div>
                        <div className="col-3">
<input
type="submit"
value="Search"
className="btn btn-primary w-100" 
 />
 </div>
                    </div>
            </form>
            < WeatherInfo data={weatherData} />
            </div>
            );
}