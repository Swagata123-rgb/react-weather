import SearchBox from "./SearchBox"; 
import InfoBox from "./infobox";
import {useState} from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({ 
            city:"Mumbai",
            temp: 25.05,
            tempmin: 25.05,
            tempmax:25.05,
            humidity: 47,
            pressure: 1016,
            feelsLike: 24.84,
            weather:"Haze",
        });

    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
  return (
    <div className="weather-app" style={{textAlign: "center", padding: "20px"}}>
      <h1>Weather App</h1>
      <p>Get the current weather for your location.</p>
      <SearchBox updateWeatherInfo={updateWeatherInfo} />
      <InfoBox info={weatherInfo}/>
    </div>
  );
}