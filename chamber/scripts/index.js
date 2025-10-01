//Hamburger button
const mainNav = document.querySelector('nav')
const hamButton = document.querySelector('#menu');
hamButton.addEventListener('click', () =>
    {
        mainNav.classList.toggle('show');
	    hamButton.classList.toggle('show');
    })
//Weather data
//-29°22'26.2 -51°06'28.8
const currentTemp = document.querySelector("#temperature");
const weatherIcon = document.querySelector("#icon");
const weatherDescription = document.querySelector("#description");
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=-29.75&lon=-51.06&appid=d06ccc2783b4ab23a8d1893eac0dc75a&units=metric';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=-29.75&lon=-51.06&appid=d06ccc2783b4ab23a8d1893eac0dc75a&units=metric';

//Call APIs
weatherFetch();
async function weatherFetch() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

forecastFetch();
async function forecastFetch()
{
    try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      const forecast = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
      displayForecast(forecast);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

//Display Weather/forecasts
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;C`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  weatherDescription.textContent = `${desc}`;
}
function displayForecast(forecast)
{
    const weatherForecast = document.querySelector(".forecastDisplay");
    forecast.forEach(day => {
        const dayForecast = document.createElement("div");
        const dayTemperature = document.createElement("p");
        let forecastIcon = document.createElement("img");
        let forecastDescription = document.createElement("p");

        dayTemperature.innerHTML = `${day.main.temp}&deg;C`;
        const iconsrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
        let desc = day.weather[0].description;
        forecastIcon.setAttribute('src', iconsrc);
        forecastIcon.setAttribute('alt', desc);
        forecastDescription.textContent = `${desc}`;

        weatherForecast.append(dayForecast);
        dayForecast.appendChild(dayTemperature);
        dayForecast.appendChild(forecastIcon);
        dayForecast.appendChild(forecastDescription);
    });
}

//Fetch data for cards
async function getCardData() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    return data.members;
}
async function init()
{
    const cardData = await getCardData();
    const highlight = cardData.filter (shop => shop.level >= 2)
    createCards(highlight);
}
init();

//Create cards

function createCards(cards)
{
    let count = 0;
    while (count < 3)
    {
        const randomNum = Math.floor(Math.random() * cards.length);
            //cards.forEach(member => {
        const section = document.createElement('li');
        document.querySelector(".business").appendChild(section);
        
        const businessName = document.createElement('h3');
        businessName.textContent = cards[randomNum].name;
        section.appendChild(businessName);

        const businessAddress = document.createElement('p');
        businessAddress.textContent = `Address: ${cards[randomNum].address}`;
        section.appendChild(businessAddress);

        const businessNumber = document.createElement('p');
        businessNumber.textContent= `Phone: ${cards[randomNum].phone}`;
        section.appendChild(businessNumber);

        const businessUrl = document.createElement("a");
        businessUrl.href = cards[randomNum].url;
        businessUrl.textContent = cards[randomNum].url;
        section.appendChild(businessUrl);

        const businessImage = document.createElement('img');
        businessImage.src = cards[randomNum].image;
        section.appendChild(businessImage);

        const businessLevel = document.createElement("p");
        businessLevel.textContent = `Membership level: ${cards[randomNum].level}`;
        section.appendChild(businessLevel);

        cards.splice(randomNum, 1);
        count++;
        //}
    //)
    };
}


//Footer content
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;
