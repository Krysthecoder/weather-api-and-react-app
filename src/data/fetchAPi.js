export function fetchAPi(latitude, longitude) {
  const key = process.env.REACT_APP_KEY;
  const apiUrl = `${process.env.REACT_APP_API_URL}lat=${latitude}&lon=${longitude}&units=metric&appid=${key}`
  console.log(key)
  console.log(apiUrl)

  const weatherInfo = fetch(apiUrl)
  .then(response => response.json())
  .then(data => data)
  .catch(error => {
    console.error(error);
    return {};
  });
  return weatherInfo;
};
