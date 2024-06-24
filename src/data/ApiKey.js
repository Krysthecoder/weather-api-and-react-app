export function fetchAPi(latitude, longitude) {
  const key = "a21cb044db8dabd63b8647ed9b64db32";
  const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`

  const weatherInfo = fetch(apiUrl)
  .then(response => response.json())
  .then(data => data)

  return weatherInfo
}