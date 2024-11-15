
// Activity 1
// const PI = 3.14;
// let radius = 3;
// let area = 0;
// area = radius * radius * PI;
// radius = 4;
// area = radius * radius * PI;
// console.log("Area2:", area)


const PI = 3.14;
// let radius = 3;
let area = 0;

function circleArea(radius) {
  const area = radius * radius * PI;
}

area = circleArea(3);
console.log("Area1:", area);

// radius = 4;

area = circleArea(4);
console.log("Area2:", area);