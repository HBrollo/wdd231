//Hamburger button
const mainNav = document.querySelector('nav')
const hamButton = document.querySelector('#menu');
hamButton.addEventListener('click', () =>
    {
        mainNav.classList.toggle('show');
	    hamButton.classList.toggle('show');
    })

//Modals
const modal0 = document.getElementById("modal0");
const nonProfit = document.getElementById("np");
nonProfit.addEventListener('click', () => 
    {
        createModal(modal0);
    })

const modal1 = document.getElementById("modal1");
const bronze = document.getElementById("bm");
bronze.addEventListener('click', () => 
    {
        createModal(modal1);
    })

const modal2 = document.getElementById("modal2");
const silver = document.getElementById("sm");
silver.addEventListener('click', () => 
    {
        createModal(modal2);
    })

const modal3 = document.getElementById("modal3");
const gold = document.getElementById("gm");
gold.addEventListener('click', () => 
    {
        createModal(modal3);
    })

function createModal(modal)
{
    modal.showModal();
    const closeButton = document.createElement("button");
    const buttonDiv = document.createElement("div");
    closeButton.innerHTML = "Close";
    modal.appendChild(buttonDiv);
    buttonDiv.appendChild(closeButton);
    closeButton.addEventListener('click', () =>
        {
            modal.close();
            buttonDiv.removeChild(closeButton);
            modal.removeChild(buttonDiv);
        });
}
//Footer content
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;
