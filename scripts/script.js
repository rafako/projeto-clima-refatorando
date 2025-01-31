const key = "3366cf895de18b8ef321f13204304d44";

function btnClick() {
    let city = document.querySelector("#cityInput").value;

    citySearch(city)
}

async function citySearch(city) {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response =>
        response.json());

    adicionarDadosNaTela(data);
}

function adicionarDadosNaTela(data) {
    document.querySelector("#cityName").innerHTML = data.name;
    document.querySelector("#humidity").innerHTML = Math.floor(data.main.humidity) + "%";
    document.querySelector("#temperature").innerHTML = Math.floor(data.main.temp) + "ºC";
    document.querySelector("#wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".info_previsao").innerHTML = data.weather[0].description;
    document.querySelector("#img_nuvem").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}