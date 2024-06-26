export function fetchAPi(latitude, longitude) {
  const key = process.env.REACT_APP_KEY;
  const apiUrl = `${process.env.REACT_APP_API_URL}lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`

  const weatherInfo = fetch(apiUrl).then(response => response.json())

  return weatherInfo
};
