import React from "react";

function CurrentWeather({
  currentTemperature,
  imageIcon,
  weatherEnviroment,
  currentHumidity,
  feelsLike,
  currentWindSpeed,
}) {
  return (
    <>
      <div>
        <div>
          <p>Currenty: {currentTemperature}</p>
          <img
            url={`https://openweathermap.org/img/wn/${imageIcon}.png`}
            alt="Current"
          />
        </div>
        <p>{weatherEnviroment}</p>
      </div>

      <ul>
        <li>Humidity: {currentHumidity}</li>
        <li>Feels like: {feelsLike}</li>
        <li>Wind speed: {currentWindSpeed}</li>
      </ul>
    </>
  );
}

export default CurrentWeather;
