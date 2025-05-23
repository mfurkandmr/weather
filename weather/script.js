const url = 'https://api.openweathermap.org/data/2.5';
const key = 'b623492dc670ee4f516681ebb5510f56';

const setQuery = (e) => {
  if (e.keyCode == '13') getResult(searchbar.value);
};

const getResult = (cityName) => {
  console.log(cityName);
  let query = `${url}/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`;
  fetch(query)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResult);
};

const displayResult = (result) => {
  let city = document.querySelector('.city');
  city.innerText = `${result.name}, ${result.sys.country}`;

  let temp = document.querySelector('.temp');
  temp.innerText = `${Math.round(result.main.temp)}`;

  let desc = document.querySelector('.desc');
  desc.innerText = result.weather[0].description;

  let minmax = document.querySelector('.minmax');
  minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;
};

const searchbar = document.getElementById('searchbar');
searchbar.addEventListener('keypress', setQuery);
