
let now = new Date();

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[now.getMonth()];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

let h4 = document.querySelector("h4"); 
h4.innerHTML = `${day}, ${month} ${date}, ${year}`;



function displayWeatherCondition(response){
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#max").innerHTML = Math.round(response.data.main.temp_max);
  document.querySelector("#min").innerHTML = Math.round(response.data.main.temp_min);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  document.querySelector ("#description").innerHTML = response.data.weather[0].description;
}

function search(city) {
 let apiKey = "eaa3811e8966a8228b88117f44a02f3c"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeatherCondition)
}

function enterCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
 search(city); 

}

function enterLocation(position) {
let apiKey = "eaa3811e8966a8228b88117f44a02f3c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(displayWeatherCondition)
}

function getCurrentLocation(event){
event.preventDefault();
navigator.geolocation.getCurrentPosition(enterLocation);
}

let enter = document.querySelector("#search-form");
enter.addEventListener("submit", enterCity);

let currentLocation = document.querySelector("#location");
currentLocation.addEventListener("click", getCurrentLocation);


search("Zurich");


