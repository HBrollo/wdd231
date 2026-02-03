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
    createCards(cardData);
}
init();

async function getCardData() {
    const response = await fetch('./data/products.json');
    const data = await response.json();
    return data.product;
}


//Create cards
function createCards(cards) {
  cards.forEach(category => {
    // Get the name (key) and its array of items
    const items = Object.values(category)[0];

    // Find the object that has an "id" property
    const idItem = items.find(obj => obj.id);
    // Get the id (if found)
    const itemId = idItem ? idItem.id : null;

    const section = document.querySelector(`.${itemId} aside`);
    items.forEach(product =>
        {
            if (!product.title) return;
            
            const productName = document.createElement("h2");
            productName.classList.add("button");
            productName.textContent = product.title
            section.appendChild(productName);
            CreateModals(productName,itemId, product.ingredients);
            

        })
    observer.observe(document.querySelector(`.${itemId}`))
  });
}


//Create Modals
function CreateModals(productName, category, array)
{
    productName.addEventListener('click', () =>
        {
            const section = document.querySelector(`.${category}`);
            const modal = document.createElement("dialog");
            section.appendChild(modal);

            const productTitle = document.createElement("h2");
            productTitle.textContent = productName.textContent;
            modal.appendChild(productTitle);

            const list = document.createElement("ul");
            modal.appendChild(list);
            
            array.forEach(ingredient =>
                {
                    const ingredientName = document.createElement("li");
                    ingredientName.textContent = ingredient;
                    list.appendChild(ingredientName);
                })
            
            const closeButton = document.createElement("button");
            closeButton.textContent = "Close";
            closeButton.addEventListener('click', () =>
                {
                    modal.close();
                    section.removeChild(modal);
                })
            modal.appendChild(closeButton);

            modal.showModal();
        })
}
//Play animations
const observer = new IntersectionObserver (entries =>
  {
    entries.forEach(entry =>
      {
        if (entry.isIntersecting) 
          {
            entry.target.classList.add('animate');
          }
      })
    },
    {threshold: 0.1}
  );
  


//Footer Content
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;
