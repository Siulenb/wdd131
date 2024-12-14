
// Example array of reviews
const reviews = [
    { name: "Luis", comment: "Fun place", date: "12/12/2024" },
    { name: "Maria", comment: "Amazing experience", date: "11/11/2024" },
    { name: "John", comment: "Will visit again", date: "10/10/2024" }
];

// Select the container for the reviews
const reviewList = document.querySelector('.review-list');

// Function to render reviews
function renderReviews(reviews) {
    reviews.forEach(review => {
        // Create the review container
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('review');

        // Add review content
        reviewDiv.innerHTML = `
            <blockquote>${review.comment}</blockquote>
            <p>- ${review.name}, <small>${review.date}</small></p>
        `;

        // Append to the review list
        reviewList.appendChild(reviewDiv);
    });
}

// Render the reviews on page load
renderReviews(reviews);
