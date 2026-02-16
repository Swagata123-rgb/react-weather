import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({updateWeatherInfo}) {
     let [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    let getWeatherInfo = async (city) => {
        let url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        let result = {
            city:city,
            temp: data.main.temp,
            tempmin: data.main.temp_min,
            tempmax: data.main.temp_max,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,
        };
        console.log(result);
        return result;
    };

    let handleChange = (e) => {
        setCity(e.target.value);
    };
    let handleSubmit = async (e) => {
        e.preventDefault();
        console.log(city);
        let newInfo = await getWeatherInfo(city);
        updateWeatherInfo(newInfo);
        setCity("");

    };
    return(
        <div className="SearchBox">
           <h3>Search for the weather</h3>
           <form onSubmit={handleSubmit}>
             <TextField id="city" label="City Name" variant="outlined" required  value={city} onChange={handleChange}/>
              <br /><br />
               <Button variant="contained" type="submit">
                  Search
                </Button>
           </form>
        </div>
    );
}