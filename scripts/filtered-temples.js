
// Menu Hamburguer
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const headerTitle = document.querySelector('header h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    headerTitle.classList.toggle('hidden');
});

// Temples array (list)
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Caracas Venezuela",
		location: "Caracas, Venezuela",
		dedicated: "2000, August, 20",
		area: 15332,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/caracas-venezuela/400x250/caracas_venezuela_temple_detail_1691066_2400x1200.jpg"
	  },
	  {
		templeName: "Sapporo Japan",
		location: "Sapporo, Japan",
		dedicated: "2016, August, 21",
		area: 48480,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg"
	  },
	  {
		templeName: "Buenos Aires Argentina",
		location: "Buenos Aires, Argentina",
		dedicated: "1986, January, 19",
		area: 30659,
		imageUrl:
		"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
	  }, 
];



// Filter variables
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");
const links = [homeLink, oldLink, newLink, largeLink, smallLink]; // All links
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
    const filteredTemples = filterCallback();          // Get the filtered temples
    createTempleCards(filteredTemples);               // Update the displayed cards
}

// Event listeners for each link
homeLink.addEventListener("click", (event) => {
    handleFilter(event, () => temples, "Home"); // Show all temples
});

oldLink.addEventListener("click", (event) => {
    handleFilter(event, () => temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) < 1900), "Old Temples");
});

newLink.addEventListener("click", (event) => {
    handleFilter(event, () => temples.filter(temple => parseInt(temple.dedicated.split(", ")[0]) >= 2000), "New Temples");
});

largeLink.addEventListener("click", (event) => {
    handleFilter(event, () => temples.filter(temple => temple.area > 90000), "Large Temples");
});

smallLink.addEventListener("click", (event) => {
    handleFilter(event, () => temples.filter(temple => temple.area < 10000), "Small Temples");
});

// Function to create temple cards
function createTempleCards(filterTemples) {
    const templeGrid = document.querySelector(".temples-grid");
    templeGrid.innerHTML = "";                                    // Clear existing cards

    filterTemples.forEach(temple => {
        let card = document.createElement("div");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let image = document.createElement("img");

        card.classList.add("temple-card");
        name.textContent = temple.templeName;
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
        dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
        area.innerHTML = `<strong>Area:</strong> ${temple.area} sq ft`;
        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeGrid.appendChild(card);
    });
}

// Initialize the page with all temples
createTempleCards(temples);
setActiveLink(homeLink);                // Set "Home" as active initially
h2.textContent = "Home";



		