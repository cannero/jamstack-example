//require("dotenv").config();

var options = {
    enableHighAccuracy: false,
    timeout: 10000,
    maximumAge: 0
};

function success(pos) {
    const url = `/.netlify/functions/weatherapi?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;
    fetch(url).then(response => {
        return response.json();
    })
    .then(data => {
        document.querySelector('#city').textContent = data.name;
        document.querySelector('#temp').textContent = data.main.temp + " °C, feels like " + data.main.feels_like + " °C";
        document.querySelector('#main').textContent = data.weather[0].main;
        document.querySelector('#desc').textContent = data.weather[0].description;

        document.querySelector("#weather").classList.remove("hidden");
    });
    
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, options);
}
