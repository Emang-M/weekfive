import React,{useState} from "react";

export default function WeatherTemperature(props) {
let [unit,setUnit]=useState("celcius");

function showFahrenheit(event){
    event.preventDefault();
setUnit("fahrenheit");
}

function showCelcius(event){
    event.preventDefault();
    setUnit("celcius");
}

function fahrenheit(props) {
    return (props.celsius * 9) / 5 + 32;
}

if (unit=== "celcius"){
  return (
    <div className="WeatherTemperature">
<span className="temperature">{Math.round(props.celsius)}</span>
<span className="unit">°C |
  <a href="/" onClick={showFahrenheit} rel="norefferer"
  >°F 
  </a> 
  </span>
<span className="unit">°C</span>
</div>
);
} else {
return(
<div className="WeatherTemperature">
<span className="temperature">{Math.round(fahrenheit)}</span>
<span className="unit">°C 
  <a href="/" onClick={showCelcius} rel="norefferer">
  |°F
  </a>
  </span>
</div>
);
}
}