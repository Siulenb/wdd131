
// Menu Hamburguer
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const headerTitle = document.querySelector('header h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    headerTitle.classList.toggle('hidden');
});

// Beaches array (list)
const beaches = [
	{
	  name: "National Park Morrocoy",
	  location: "Falcón, Venezuela",
	  type: "Island",
	  area: 32090,
	  imageUrl:
	  "https://i0.wp.com/www.analitica.com/wp-content/uploads/2016/09/ParqueNacionalMorrocoy.jpg?ssl=1"
	},
	{
	  name: "Playa El Agua",
	  location: "Margarita, Venezuela",
	  type: "Island",
	  area: 400,
	  imageUrl:
	  "https://i0.wp.com/www.analitica.com/wp-content/uploads/2016/09/PlayaElAgua.jpg?ssl=1"
	},
	{
	  name: "National Park Mochima",
	  location: "Barcelona / Cumaná, Venezuela",
	  type: "Coast",
	  area: 94935,
	  imageUrl:
	  "https://i0.wp.com/www.analitica.com/wp-content/uploads/2016/09/Mochima-1.jpg?ssl=1"
	},
	{
	  name: "Bahía de Cata",
	  location: "Maracay, Venezuela",
	  type: "Coast",
	  area: 380,
	  imageUrl:
	  "https://i0.wp.com/www.analitica.com/wp-content/uploads/2016/09/BahiaDeCata.jpg?ssl=1"
	},
	{
	  name: "Choroní",
	  location: "Aragua, Venezuela",
	  type: "Coast",
	  area: 107800,
	  imageUrl:
	  "https://i0.wp.com/www.analitica.com/wp-content/uploads/2016/09/Choroni.jpg?ssl=1"
	},
	{
	  name: "El Yaque",
	  location: "Nueva Esparta, Venezuela",
	  type: "Island",
	  area: 3930,
	  imageUrl:
	  "https://i0.wp.com/www.analitica.com/wp-content/uploads/2016/09/ElYaque.jpg?ssl=1"
	},
	{
	  name: "National Park Los Roques",
	  location: "Los Roques, Venezuela",
	  type: "Island",
	  area: 225153,
	  imageUrl:
	  "https://i0.wp.com/www.analitica.com/wp-content/uploads/2016/09/LosRoques.jpg?ssl=1"
	},
	{
		name: "Playa Medina",
		location: "Paria Peninsula, Venezuela",
		type: "Coast",
		area: 0.06,
		imageUrl:
		"https://i0.wp.com/www.analitica.com/wp-content/uploads/2016/09/PlayaMedina.jpg?ssl=1"
	  },
	  {
		name: "Playa Caribe",
		location: "Miranda, Venezuela",
		type: "Coast",
		area: 0.12,
		imageUrl:
		"https://i0.wp.com/www.analitica.com/wp-content/uploads/2016/09/PlayaCaribe.jpg?ssl=1"
	  },
];



// Filter variables
const allLink = document.querySelector("#all");
const coastLink = document.querySelector("#coast");
const islandLink = document.querySelector("#island");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const links = [allLink, coastLink, islandLink, largeLink, smallLink]; // All links
const h2 = document.querySelector("#title");                     // Select the <h2> element

// Function to set active class
function setActiveLink(activeLink) {
    links.forEach(link => link.classList.remove("active")); // Remove active class from all
    activeLink.classList.add("active");                    // Add active class to the clicked link
}

// Function to handle filters
function handleFilter(event, filterCallback, filterTitle) {
    event.preventDefault();                               // Prevent default navigation
    setActiveLink(event.target);                         // Set the clicked link as active
	h2.textContent = filterTitle;                       // Update the <h2> text
    const filteredBeaches = filterCallback();          // Get the filtered
    createBeachCards(filteredBeaches);               // Update the displayed cards
}

// Event listeners for each link
allLink.addEventListener("click", (event) => {
    handleFilter(event, () => beaches, "all"); // Show all beaches
});

coastLink.addEventListener("click", (event) => {
    handleFilter(event, () => beaches.filter(beach => beach.type === "Coast"), "coast");
});

islandLink.addEventListener("click", (event) => {
    handleFilter(event, () => beaches.filter(beach => beach.type === "Island"), "Island");
});

largeLink.addEventListener("click", (event) => {
    handleFilter(event, () => beaches.filter(beach => beach.area > 10000), "Large Hectare");
});

smallLink.addEventListener("click", (event) => {
    handleFilter(event, () => beaches.filter(beach => beach.area < 10000), "Small Hectare");
});

// Function to create beach cards
function createBeachCards(filterbeaches) {
    const beachGrid = document.querySelector(".beaches-grid");
    beachGrid.innerHTML = "";                                    // Clear existing cards

    filterbeaches.forEach(beach => {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let type = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        card.classList.add("beach-card");
        name.textContent = beach.name;
        location.innerHTML = `<strong>Location:</strong> ${beach.location}`;
        type.innerHTML = `<strong>Type:</strong> ${beach.type}`;
        area.innerHTML = `<strong>Area:</strong> ${beach.area} ha`;
        image.setAttribute("src", beach.imageUrl);
        image.setAttribute("alt", `${beach.name} Beach`);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(type);
        card.appendChild(area);
        card.appendChild(image);

        beachGrid.appendChild(card);
    });
}

// Initialize the page with all beaches
createBeachCards(beaches);
setActiveLink(allLink);                // Set "all" as active initially
h2.textContent = "All Beaches";



		