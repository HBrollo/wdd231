//Hamburger button
const mainNav = document.querySelector('nav')
const hamButton = document.querySelector('#menu');
hamButton.addEventListener('click', () =>
    {
        mainNav.classList.toggle('show');
	    hamButton.classList.toggle('show');
    })

//Form submission
const modal = document.querySelector("dialog");
const closeButton = document.querySelector("#close");
const form = document.querySelector("form");

form.addEventListener("submit", (event) =>
{
    event.preventDefault();
    if (form.checkValidity())
            {
                modal.showModal();
            }
})
closeButton.addEventListener("click", () =>
    {
        modal.close();
    });

//Footer Content
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;
