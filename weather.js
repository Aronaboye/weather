const APIKEY = '2722e6ce6c82803ed98ac072f23cc56d'

//appel api openweather
let apiCall = function (ville){
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${APIKEY}&units=metric&lang=fr`;
fetch(url)
.then((response) => 
response.json().then((data) => {
    console.log(data);
    document.querySelector("#ville").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = data.main.temp + " degré";
    document.querySelector("#humidity").innerHTML = data.main.humidity + " %";
    document.querySelector("#vent").innerHTML = data.wind.speed + " km/h";
})
);
}
    
//ecouteur d'événement
const form = document.querySelector("form");
form.addEventListener("submit",(e) => {
    e.preventDefault();
    let ville = document.querySelector("#inputCity").value;
    apiCall(ville);
})
apiCall("Thiès");