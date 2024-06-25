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
    setLocation({ latitude, location });

    setWeather(fetchAPi(latitude, longitude));
  };

  function error() {
    console.log("unable to determine location");
  };

  return (
    <div className="App">

      {/* {location && !weather ? <p>Loading weather data...</p> : null} */}
      {weather ? (
        <div>
          <h1>The current Weather in {weather.timezone} is:</h1>
          <p>Location: {weather.current.temp}</p>
        </div>
      ) : <p>No hay :V</p> }

    </div>
  );
}

export default App;
