document.querySelector('.get-started').addEventListener('click', () => {
    alert('Get started button clicked!');
});
// You can add interactivity for map points here, like opening links or showing more information
document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', () => {
        alert(`You clicked on ${point.getAttribute('data-location')}!`);
    });
});
window.addEventListener("scroll", () => {
    const section = document.querySelector(".about-section");
    const position = section.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom > 0) {
        document.querySelector(".image-container").style.animationPlayState = "running";
        document.querySelector(".text-container").style.animationPlayState = "running";
    }
});

const customCursor = document.querySelector('.custom-cursor');
        
        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = `${e.pageX}px`;
            customCursor.style.top = `${e.pageY}px`;
        });

        document.querySelectorAll('.company-logo').forEach(logo => {
            logo.addEventListener('mouseover', () => {
                customCursor.style.transform = 'scale(2)';
            });
            logo.addEventListener('mouseleave', () => {
                customCursor.style.transform = 'scale(1)';
            });
        });

const carousel = document.querySelector('.carousel');
let angle = 0;

// Function to rotate the carousel
function rotateCarousel() {
  angle -= 60; // Rotate by 72 degrees (360 / number of items)
  carousel.style.transform = `rotateY(${angle}deg)`;
}

// Automatically rotate the carousel every 3 seconds
setInterval(rotateCarousel, 1000);
  
const menuItems = document.querySelectorAll('.menu-item');
    const contentImages = document.querySelectorAll('.content img');

    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        // Remove active class from all menu items
        menuItems.forEach(menu => menu.classList.remove('active'));
        item.classList.add('active');

        // Hide all images
        contentImages.forEach(img => img.classList.remove('active'));

        // Show target image
        const targetId = item.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
      });
    });