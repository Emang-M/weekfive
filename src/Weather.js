import React from "react";
import "./Weather.css"

export default function Weather(){
    return (
        <div className="Weather">
            <form> 
                <div className="row">
                    <div className="col-9"> 
                        <input 
                        type="Search"
                        placeholder="Enter a city.."
                        className="form-control"
                        />
                        </div>
                        <div className="col-3">
<input
type="submit"
value="Search"
className="btn btn-primary"
                    </div>
                </div>
            </form>
            <h1>Maun</h1>
            <ul>
            <li> Thursday 19:42</li>
            <li>Clear with periodic clouds</li>
            </ul>
            <div className="row">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" alt="weathericon" />
                30°C
            </div>
            <div className="col-6">
                <ul>
                    <li> Precipitation: 1% </li>
                    <li>Humidity: 20% </li>
                    <li>Wind: 3 km/h </li>
                    </ul>
            </div>
        </div>
    );
}