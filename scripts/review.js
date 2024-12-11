// Extract query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Display the submitted review details
const reviewDetails = document.getElementById("reviewDetails");

urlParams.forEach((value, key) => {
  const listItem = document.createElement("li");
  listItem.textContent = `${key}: ${value}`;
  reviewDetails.appendChild(listItem);
});

// let numReveiw = Number(window.localStorage.getItem("reviewCount")) || 0;
// numReveiw++;


// Update and display the review count from localStorage
const reviewCountElement = document.getElementById("reviewCount");
let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
reviewCount++;



localStorage.setItem("reviewCount", reviewCount);

if (reviewCount === 1) {
  reviewCountElement.textContent = "We appreciate your first review!";
} else {
  reviewCountElement.textContent = reviewCount;
}

// reviewCountElement.textContent = reviewCount;

