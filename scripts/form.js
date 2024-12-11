// Product Array
const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 },
  ];
  
  // Populate the Product Name Options
  const productSelect = document.getElementById("productName");
  
  products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
  
  // Increment Review Counter
  // if (window.location.pathname.includes("review.html")) {
  //   const reviewCount = localStorage.getItem("reviewCount") || 0; remove
  //   localStorage.setItem("reviewCount", parseInt(reviewCount) + 1);
  // }
  