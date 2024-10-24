const titles = ["Markting", "Pogramming", "Web Design", "Social Skills"];
let index = 0;

function rotateText() {
    const rotatingTextElement = document.querySelector('.rotating-text');
    rotatingTextElement.textContent = titles[index];
    index = (index + 1) % titles.length; // Loop through the array
}

setInterval(rotateText, 4000); // Change text every 2 seconds


const imageContainer = document.querySelector('.hov');
const image = document.querySelector('.hov-2 ');
const ezi = document.querySelector('.ezi-first');

imageContainer.addEventListener('mousemove', (e) => {
const rect = imageContainer.getBoundingClientRect();
const x = e.clientX - rect.left; // X coordinate within the container
const y = e.clientY - rect.top;  // Y coordinate within the container

const moveX = (x - rect.width / 2) / 20;
const moveY = (y - rect.height / 2) / 20;

image.style.transform = `translate(${moveX}px, ${moveY}px)`;
ezi.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

imageContainer.addEventListener('mouseleave', () => {
image.style.transform = `translate(0px, 0px)`; 
ezi.style.transform = `translate(0px, 0px)`; 
});
