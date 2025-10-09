//Hamburger button
const mainNav = document.querySelector('nav')
const hamButton = document.querySelector('#menu');
hamButton.addEventListener('click', () =>
    {
        mainNav.classList.toggle('show');
	    hamButton.classList.toggle('show');
    })
//Fetch data for cards
async function init()
{
    const cardData = await getCardData();
    console.log(cardData);
    createCards(cardData);
}
init();

async function getCardData() {
    const response = await fetch('./data/discover.json');
    const data = await response.json();
    return data.places;
}


//Create cards
function createCards(cards)
{
    
    cards.forEach(place => {
        const section = document.createElement('li');
        document.querySelector(".cards").appendChild(section);
        
        const placeName = document.createElement('h3');
        placeName.textContent = place.name;
        section.appendChild(placeName);

        const placeAddress = document.createElement('p');
        placeAddress.textContent = `Address: ${place.address}`;
        section.appendChild(placeAddress);

        const placeImage = document.createElement('img');
        placeImage.src = place.image;
        section.appendChild(placeImage);

        const placeDescription = document.createElement('p');
        placeDescription.textContent = place.description;
        section.appendChild(placeDescription);

        const button = document.createElement("button");
        button.textContent = "Learn More";
        section.appendChild(button);

    });
}
//localStorage
const now = Date.now();
const message = document.querySelector(".message");
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
  // First visit
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  // Calculate the number of days between visits
  const msInADay = 1000 * 60 * 60 * 24;
  const daysBetween = Math.floor((now - Number(lastVisit)) / msInADay);

  if (daysBetween < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else if (daysBetween === 1) {
    message.textContent = "You last visited 1 day ago.";
  } else {
    message.textContent = `You last visited ${daysBetween} days ago.`;
  }
}



// Check if there's a stored last visit



// Store the current visit time for the next visit
localStorage.setItem("lastVisit", now);


//Footer content
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;
