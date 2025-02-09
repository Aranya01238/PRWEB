// script.js

const carousel = document.querySelector('.carousel');
let angle = 0;

// Function to rotate the carousel
function rotateCarousel() {
  angle -= 60; // Rotate by 72 degrees (360 / number of items)
  carousel.style.transform = `rotateY(${angle}deg)`;
}

// Automatically rotate the carousel every 3 seconds
setInterval(rotateCarousel, 1000);
  