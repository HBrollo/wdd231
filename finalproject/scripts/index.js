//Hamburger button
const mainNav = document.querySelector('nav')
const hamButton = document.querySelector('#menu');
hamButton.addEventListener('click', () =>
    {
        mainNav.classList.toggle('show');
	    hamButton.classList.toggle('show');
    })


//localStorage
const now = Date.now();
const message = document.querySelector(".welcome");
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
  // First visit
  message.textContent = "Welcome! Feel free to take a look around.";
} else {
  // Calculate the number of days between visits
  const msInADay = 1000 * 60 * 60 * 24;
  const daysBetween = Math.floor((now - Number(lastVisit)) / msInADay);

  if (daysBetween < 1) {
    message.textContent = "Back so soon? You're always welcome here.";
  } else if (daysBetween === 1) {
    message.textContent = "You last visited 1 day ago.";
  } else {
    message.textContent = `You last visited ${daysBetween} days ago.`;
  }
}


// Store the current visit time for the next visit
localStorage.setItem("lastVisit", now);


//Footer Content
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;
