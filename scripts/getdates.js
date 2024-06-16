// select the DOM elements for output
const year = document.querySelector("#currentyear");

// use the date object
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.addEventListener('DOMContentLoaded', function() {
    let lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = "Last Modification: " + lastModified;
});