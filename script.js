const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

let yesSize = 1; 
let messageIndex = 0;

const messages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Pookie please?",
    "Don't do this to me!",
    "I'm gonna cry...",
    "You're breaking my heart!",
    "Just say yes please! I love you so much ❤️",
    "What if I will give you a kiss?",
    "No",
    "No again?",
    
    

];

function moveButton() {
    // 1. Increase the size of the YES button
    yesSize += 0.2;
    yesButton.style.transform = `scale(${yesSize})`;

    // 2. Change the text
    if (messageIndex < messages.length - 1) {
        messageIndex++;
        noButton.innerText = messages[messageIndex];
    } else {
        noButton.innerText = messages[messages.length - 1];
    }

    // 3. Move the NO button
    // Get the actual viewport dimensions
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Get button dimensions
    const btnWidth = noButton.offsetWidth;
    const btnHeight = noButton.offsetHeight;

    // Calculate valid range (subtract button size so it stays within bounds)
    // We add a 20px "buffer" so it doesn't touch the very edge
    const maxX = windowWidth - btnWidth - 20;
    const maxY = windowHeight - btnHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // IMPORTANT: Ensure values are not negative (keeps it on screen)
    const safeX = Math.max(10, randomX); 
    const safeY = Math.max(10, randomY);

    // Apply new position
    // 'fixed' ensures it moves relative to the SCREEN, not the container
    noButton.style.position = 'fixed'; 
    noButton.style.left = `${safeX}px`;
    noButton.style.top = `${safeY}px`;
}

function nextPage() {
    window.location.href = "yes.html";
}

// EVENTS
noButton.addEventListener('mouseenter', moveButton); // Desktop
noButton.addEventListener('click', moveButton);      // Mobile
yesButton.addEventListener('click', nextPage);

// --- NEW: Handle Envelope Opening ---

const envelope = document.getElementById('envelope');

// When the envelope is clicked...
envelope.addEventListener('click', () => {
    // Add the class that triggers the CSS transition (slide up)
    envelope.classList.add('open');
    
    // Optional: Play music here if you wanted to!
});