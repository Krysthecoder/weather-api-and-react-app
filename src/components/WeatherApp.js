import { useState } from "react";
import { fetchAPi } from "../data/ApiKey";

function WeatherApp() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  

  function handleLocation() {
    navigator.geolocation.getCurrentPosition(success, error);
  }


  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, location });
    fetchAPi(latitude,longitude)
    .then(data => 
      setWeather(data)
    )
  };

  function error() {
    console.log("unable to determine location");
  };

  return (
    <>
      {(!location) ? <button onClick={handleLocation}>Get Location</button> : null}
      {location && !weather ? <p>Loading weather data...</p> : null}
      {weather ? (
        <div>
          <p>Location: {weather.timezone}</p>
          <p>Location: {weather.current.temp}</p>
        </div>
      ) : null}
    </>
  )
}

export default WeatherApp;

//const APIRoute = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${key}`

