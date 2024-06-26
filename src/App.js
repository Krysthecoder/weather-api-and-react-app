import './App.css';
import React, { useEffect, useState } from "react";
import { fetchAPi } from "../src/data/fetchAPi";

const App = () => {

  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });

    fetchAPi(latitude, longitude).then(data => setWeather(data)).catch(error => setWeather(null));
    console.log(weather)
  };

  function error() {
    console.log("unable to determine location");
  };

  return (
    <div className="App">
      {weather ? (
        <div>
          <h1>The current Weather in {weather.timezone} is:</h1>
          <p>Temperature: {weather.current.temp}</p>
          <p>Humidity: {weather.current.humidity}*</p>
          <p>Sunset: {weather.current.sunset}</p>
          <p>Sky State: {weather.current.weather[0].description}</p>
        </div>
      ) : <p>Unable to retrieve Data, please try again later {weather}</p>}



    </div>
  );
}

export default App;
