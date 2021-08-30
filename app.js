const searchField = () => {
  const searchInput = document.getElementById("search-field");
  const searchText = searchInput.value;
  console.log(searchText);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=bb60c93a1f06a4b2d6918ea7be60c9e7`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayWeather(data));
};

const displayWeather = (weather) => {
  console.log(weather.weather[0]);
  //get weather situation
  const weatherIcon = weather.weather[0].main;
  console.log(weatherIcon);
  //set weather icon
  // const iconField = document.getElementById("icon");

  if (weatherIcon === "Haze") {
    // const icon1 = document.getElementById("icon-1");
    // icon1.style.display = "block";
    weatherShow(false, "icon-2");
    weatherShow(false, "icon-3");
    weatherShow(true, "icon-1");
  } else if (weatherIcon === "Clouds") {
    weatherShow(false, "icon-1");
    weatherShow(false, "icon-3");
    weatherShow(true, "icon-2");
  } else if (weatherIcon === "Clear") {
    weatherShow(false, "icon-1");
    weatherShow(false, "icon-2");
    weatherShow(true, "icon-3");
  }
  // weather temp calculation
  const mainWeather = weather.main;
  console.log(mainWeather);
  const tempKelvin = mainWeather.temp;
  const temp = weatherCalculation(tempKelvin);
  celDisplay("temperature", temp);
  const feelsKelvin = mainWeather.feels_like;
  const feels = weatherCalculation(feelsKelvin);
  console.log(feels);

  celDisplay("feels-like", feels);
};

const weatherCalculation = (num) => {
  const c = parseFloat(num - 273.15).toFixed(2);
  return c;
};
const celDisplay = (celId, temp) => {
  const temperature = document.getElementById(celId);
  temperature.innerText = ` ${temp} °C`;
};

const weatherShow = (showIcon, iconId) => {
  const icon = document.getElementById(iconId);
  console.log(icon);
  if (showIcon === true) {
    icon.style.display = "block";
  } else {
    icon.style.display = "none";
  }
};
