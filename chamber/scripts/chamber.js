//Hamburger button
const mainNav = document.querySelector('nav')
const hamButton = document.querySelector('#menu');
hamButton.addEventListener('click', () =>
    {
        mainNav.classList.toggle('show');
	    hamButton.classList.toggle('show');
    })

//Grid/List Toggle
const businessSection = document.querySelector(".business");
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');
gridButton.addEventListener('click', () =>
    {
        businessSection.classList.add("grid");
        businessSection.classList.remove("list");
    })
listButton.addEventListener('click', () =>
    {
        businessSection.classList.remove("grid");
        businessSection.classList.add("list");
    })
//Fetch data for cards

async function getCardData() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    return data.members;
}
async function init()
{
    const cardData = await getCardData();
    console.log(cardData);
    createCards(cardData);
}
init();

//Create cards

function createCards(cards)
{
    
    cards.forEach(member => {
        const section = document.createElement('li');
        document.querySelector(".business").appendChild(section);
        
        const businessName = document.createElement('h3');
        businessName.textContent = member.name;
        section.appendChild(businessName);

        const businessAddress = document.createElement('p');
        businessAddress.textContent = `Address: ${member.address}`;
        section.appendChild(businessAddress);

        const businessNumber = document.createElement('p');
        businessNumber.textContent= `Phone: ${member.phone}`;
        section.appendChild(businessNumber);

        const businessUrl = document.createElement("p");
        businessUrl.textContent = member.url;
        section.appendChild(businessUrl);

        const businessImage = document.createElement('img');
        businessImage.src = member.image;
        section.appendChild(businessImage);

        const businessLevel = document.createElement("p");
        businessLevel.textContent = `Membership level: ${member.level}`;
        section.appendChild(businessLevel);
        
    });
}


//Footer content
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;
