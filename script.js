// function nextPage() {
//     window.location.href = "yes.html";
// }

// function moveButton() {
//     var x = Math.random() * (window.innerWidth - document.getElementById('noButton').offsetWidth);
//     var y = Math.random() * (window.innerHeight - document.getElementById('noButton').offsetHeight);
//     document.getElementById('noButton').style.left = `${x}px`;
//     document.getElementById('noButton').style.top = `${y}px`;
// }

function nextPage() {
    window.location.href = "yes.html";
}
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

let yesSize = 1; // Starting scale

noButton.addEventListener('mouseenter', () => {
    // 1. Increase the scale of the Yes button
    yesSize += 0.2; 
    yesButton.style.transform = `scale(${yesSize})`;

    // 2. (Optional) Move the No button to a random position to make it harder to catch
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
