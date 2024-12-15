

// Beach Array
const beaches = [
    { name: "Playa el Agua", averagerating: 4.7 },
    { name: "Los Roques", averagerating: 4.9 },
    { name: "Playa Caracolito", averagerating: 4.0 },
    { name: "Cayo Sombrero", averagerating: 4.9 },
    { name: "Margarita Beach", averagerating: 3.9 },
  ];
  
  // Populate the beach Name Options
  const beachSelect = document.getElementById("visitedBeach");
  
  beaches.forEach((beach) => {
    const option = document.createElement("option");
    option.value = beach.name;
    option.textContent = beach.name;
    beachSelect.appendChild(option);
  });
  
 