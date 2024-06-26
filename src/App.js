import "./App.css";
import React, { useEffect, useState } from "react";
import { fetchAPi } from "../src/data/fetchAPi";
import CurrentWeather from "./components/CurrentWeather";

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

    fetchAPi(latitude, longitude)
      .then((data) => setWeather(data))
      .catch((error) => setWeather(null));
  }

  console.log(weather)
  

  function error() {
    console.log("unable to determine location");
  }

  return (
    <div className="App">
      {weather ? (
        <CurrentWeather
          currentTemperature={weather.current.temp}
          imageIcon={weather.current.weather[0].icon}
          weatherEnviroment={weather.current.weather[0].description}
          currentHumidity={weather.current.humidity}
          feelsLike={weather.current.feels_like}
          currentWindSpeed={weather.current.wind_speed}
        />


      ) : (
        <p>Unable to retrieve Data, please try again later</p>
      )}
    </div>
  );
};

export default App;
