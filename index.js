// Import stylesheets
import "./style.css";

const apiKey = "9bd419b49d4261031516ad5fddac3439";
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