'use strict';

/*
Popis úkolu a podrobný návod najdeš v souboru README.md
Zde následuje tvůj úžasný program! ❤
*/

// získání API
const API_KEY = '912ca86079ef703a5a8f36c24a67b722';
const API_BASE = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric&lang=cz`;



const ctyrdenniPredpoved = document.querySelector('#predpoved');

let ikonaEl = document.querySelector('#ikona');
let miniIkonaEl = document.querySelector('#miniIkona');

const brno = document.querySelector('#mesto');
const tlacitkoBrno = document.querySelector('#BRN');
const tlacitkoLasVegas = document.querySelector('#LV');
const tlacitkoHamilton = document.querySelector('#HAM');
const bodyEl = document.querySelector('body');

const tlacitkoLokace = document.querySelector('#geolokace');


// tlačítka
tlacitkoBrno.addEventListener('click', function() {
  pocasiMesto('brno');
  predpoved('brno');
  bodyEl.style.backgroundImage = `url(images/Brno.jpeg)`;
});
tlacitkoLasVegas.addEventListener('click', function() {
  pocasiMesto('las+vegas');
  predpoved('las+vegas');
  bodyEl.style.backgroundImage = `url(images/NewVegas.jpg)`;
});
tlacitkoHamilton.addEventListener('click', function() {
  pocasiMesto('hamilton');
  predpoved('hamilton');
  bodyEl.style.backgroundImage = `url(images/Hobitin.png)`;
});


tlacitkoLokace.addEventListener('click', vyhledavacGPS)
function vyhledavacGPS() {
  /*
  window.navigator.geolocation
  .getCurrentPosition(getLocation);

  function getLocation(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
  }

  POZN.: zkoušela jsem, nejde mi to, tak tu mám natvrdo koordináty, ať se to aspoň nekousne
  */
  const lat = 49.1980324;
  const lon = 16.5462387;

  fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=cz`)
    .then (response => response.json())
    .then (vypisPocasi);

  fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=cz`)
    .then (response => response.json())
    .then (vypisPredpoved);

  bodyEl.style.backgroundImage = `url(images/background.jpg)`;

  if (pocasi.id) {
    pocasi.id === 0;
    return mesto.textContent = 'Současná pozice';
  }
};



// Hlavní předpověď počasí pomocí .textContent
pocasiMesto('brno');
function pocasiMesto(mesto) {
  fetch(API_BASE + `&q=${mesto}`)
    .then (response => response.json())
    .then (vypisPocasi);
}

function vypisPocasi(pocasi) {
  
  let zmenIkonu = getWeatherIcon(pocasi.weather[0].id, pocasi.weather[0].icon);
  ikonaEl.innerHTML = zmenIkonu;

  function casFormat(cas) {
    const datum = new Date ( ( cas + pocasi.timezone) * 1000 );
    let hodiny = datum.getUTCHours();
    let minuty = datum.getUTCMinutes();
    return `${hodiny}:${minuty < 10 ? '0' + minuty: minuty}`;
  }

  mesto.textContent = pocasi.name;
  teplota.textContent = Math.round(pocasi.main.temp);
  popis.textContent = pocasi.weather[0].description;
  ikona.innerHTML = zmenIkonu;
  vitr.textContent = pocasi.wind.speed.toFixed(1);
  vlhkost.textContent = pocasi.main.humidity;
  vychod.textContent = casFormat(pocasi.sys.sunrise);
  zapad.textContent = casFormat(pocasi.sys.sunset);

}


// Předpověď počasí na 4 dny pomocí .innerHTML
predpoved('brno');
function predpoved(mesto) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric&lang=cz&q=${mesto}`)
    .then (response => response.json())
    .then (vypisPredpoved);
}

function vypisPredpoved(predpoved) {

  function dnyFormat(dF) {
    const days = new Date ( dF * 1000 );
    const tyden = ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'];
   
    let day = days.getDay();
    let date = days.getDate();
    let month = days.getMonth();

    return `${tyden[day]} ${date}.${month + 1}.`;
  };

  let vypis = '';
  vypis = `

  <div class="weather__forecast" id="predpoved"> 
    <div class="forecast">

      <div class="forecast__day">${dnyFormat(predpoved.list[8].dt)}</div>
      <div class="forecast__icon" id="miniIkona">
        ${getWeatherIcon(predpoved.list[8].weather[0].id, predpoved.list[8].weather[0].icon)}
      </div>
      <div class="forecast__temp">${Math.round(predpoved.list[8].main.temp)}°C</div>
      
      </div>
  </div>

  <div class="weather__forecast" id="predpoved"> 
  <div class="forecast">
      <div class="forecast__day">${dnyFormat(predpoved.list[16].dt)}</div>
      <div class="forecast__icon" id="miniIkona">
        ${getWeatherIcon(predpoved.list[16].weather[0].id, predpoved.list[16].weather[0].icon)}
      </div>
      <div class="forecast__temp">${Math.round(predpoved.list[16].main.temp)}°C</div>

      </div>
  </div>

  <div class="weather__forecast" id="predpoved"> 
  <div class="forecast">
      <div class="forecast__day">${dnyFormat(predpoved.list[24].dt)}</div>
      <div class="forecast__icon" id="miniIkona">
        ${getWeatherIcon(predpoved.list[24].weather[0].id, predpoved.list[24].weather[0].icon)}
      </div>
      <div class="forecast__temp">${Math.round(predpoved.list[24].main.temp)}°C</div>

      </div>
  </div>

  <div class="weather__forecast" id="predpoved"> 
  <div class="forecast">
      <div class="forecast__day">${dnyFormat(predpoved.list[32].dt)}</div>
      <div class="forecast__icon" id="miniIkona">
        ${getWeatherIcon(predpoved.list[32].weather[0].id, predpoved.list[32].weather[0].icon)}
      </div>
      <div class="forecast__temp">${Math.round(predpoved.list[32].main.temp)}°C</div>

    </div>
  </div>
 
  `;

  ctyrdenniPredpoved.innerHTML = vypis;
}
