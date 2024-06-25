import { useEffect, useState } from "react";
import { fetchAPi } from "../data/fetchAPi";

function WeatherApp() {
  const [location, setLocation] = useState(null);
  const [weather, setWeather] = useState(null);
  
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(success, error);
  },[])


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
