const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const envelope = document.getElementById('envelope');

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
    "No again?"
];

function moveButton() {
    // Increase size of YES button
    yesSize += 0.2;
    yesButton.style.transform = `scale(${yesSize})`;

    // Change NO button text
    if (messageIndex < messages.length - 1) {
        messageIndex++;
        noButton.innerText = messages[messageIndex];
    } else {
        noButton.innerText = messages[messages.length - 1];
    }

    // Move NO button randomly
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const btnWidth = noButton.offsetWidth;
    const btnHeight = noButton.offsetHeight;

    const maxX = windowWidth - btnWidth - 20;
    const maxY = windowHeight - btnHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    const safeX = Math.max(10, randomX); 
    const safeY = Math.max(10, randomY);

    noButton.style.position = 'fixed'; 
    noButton.style.left = `${safeX}px`;
    noButton.style.top = `${safeY}px`;
}

function nextPage() {
    window.location.href = "yes.html";
}

// EVENTS
noButton.addEventListener('mouseenter', moveButton);
noButton.addEventListener('click', moveButton);
yesButton.addEventListener('click', nextPage);

// Handle Envelope
if (envelope) {
    envelope.addEventListener('click', () => {
        envelope.classList.add('open');
    });
}