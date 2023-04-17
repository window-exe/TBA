
var toggleNav = document.getElementById('toggle-nav');
var nav = document.querySelector('nav');
var logo = document.getElementById('logo');

toggleNav.addEventListener('click', function () {
  nav.classList.toggle('hidden');
});

logo.addEventListener('click', function () {
  if (window.innerWidth <= 767) {
    nav.classList.toggle('hidden');
  }
});

function playMusic() {
  var audio = document.getElementById("bg-music");
  audio.loop = true;
  audio.play();
}

const openWeatherBtn = document.querySelector('.open-weather-btn');
const weatherSection = document.querySelector('.weather');

openWeatherBtn.addEventListener('click', () => {
  weatherSection.classList.toggle('hidden');
});

const apiKey = "840dc328f756b90d2bd5ace25a2af7de";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".wsearch input");
const searchBtn = document.querySelector(".wsearch button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather2").style.display = "none";
  }
  else {

    var data = await response.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "/img/images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "/img/images/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "/img/images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "/img/images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "/img/images/mist.png"
    }

    document.querySelector(".weather2").style.display = "block"
    document.querySelector(".error").style.display = "none"

    var data = await response.json();

  }
}

searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
})

