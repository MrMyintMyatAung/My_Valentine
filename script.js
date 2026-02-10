// 

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const envelope = document.getElementById("envelope");
const heartContainer = document.querySelector(".heart-particles");
const textElement = document.getElementById("typing-text");

// 1. Typing Effect
const phrase = "For Kon Su...";
let idx = 0;
function type() {
    if (idx < phrase.length) {
        textElement.innerHTML += phrase.charAt(idx);
        idx++;
        setTimeout(type, 150);
    }
}

// 2. The List of "No" Texts
const noTexts = [
    "No", 
    "Are you sure?", 
    "Really?", 
    "Think again!", 
    "Last chance!", 
    "Surely not?",  
    "Give it another thought!", 
    "Are you absolutely certain?", 
    "This could be a mistake!", 
    "Have a heart!", 
    "Don't be so cold!",  
    "I wouldn't say no!", 
    "You're breaking my heart ;(", 
    "Plsss? 🥺"
];

let textIndex = 0;
let yesScale = 1;

function moveButton() {
    // A. Change the Text FIRST (so the button size updates before we move it)
    textIndex = (textIndex + 1) % noTexts.length; // Loop through the list
    noButton.innerText = noTexts[textIndex];

    // B. Calculate new Position
    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    const btnRect = noButton.getBoundingClientRect();

    const buffer = 40; 
    const maxX = containerRect.width - btnRect.width - buffer;
    const maxY = containerRect.height - btnRect.height - buffer;

    // Use Math.max(0, ...) to prevent negative numbers if the text makes the button huge
    const randomX = Math.floor(Math.random() * Math.max(0, maxX));
    const randomY = Math.floor(Math.random() * Math.max(0, maxY));

    noButton.style.position = "absolute";
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // C. Make Yes Button Grow
    yesScale += 0.10; 
    yesButton.style.transform = `scale(${yesScale})`;
    yesButton.style.animation = "none"; 
}

// 3. Hover Effects
yesButton.addEventListener("mouseenter", () => heartContainer.classList.add("hearts-yes"));
yesButton.addEventListener("mouseleave", () => heartContainer.classList.remove("hearts-yes"));

noButton.addEventListener("mouseenter", () => {
    heartContainer.classList.add("hearts-no");
    moveButton(); // Changes text and moves
});

noButton.addEventListener("mouseleave", () => heartContainer.classList.remove("hearts-no"));

// Mobile touch support
noButton.addEventListener("touchstart", (e) => {
    e.preventDefault();
    moveButton();
});

// 4. Click Events
envelope.addEventListener("click", () => {
    envelope.classList.add("open");
});

yesButton.addEventListener("click", () => {
    window.location.href = "yes.html";
});

window.onload = type;