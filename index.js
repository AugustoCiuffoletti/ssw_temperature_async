// Import stylesheets
import "./style.css";

const apiKey = "d0fda39104b3c7c45fe031a5392964c1";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?APPID=" +
  apiKey +
  "&units=metric&q=";
var cityElems = document.getElementsByClassName("citta");
for (let elem of cityElems) {
  elem.onclick = () => display(elem.innerHTML);
}
calcoloMedia.onclick = () => media();

function doCity(city, callback) {
  let promise = fetch(URL + city)
    .then(response => response.json(), error => alert(error))
    .then(data => callback(data));
  return promise;
}
async function display(city) {
  let t = await doCity(city, data => data.main.temp);
  document.getElementById("risposta").innerHTML =
    "A " + city + " ci sono " + t + " gradi";
}
async function media() {
  let somma = 0;
  for (let city of cityElems) {
    somma += await doCity(city.innerHTML, data => data.main.temp);
  }
  document.getElementById("media").innerText = somma/cityElems.length;
}