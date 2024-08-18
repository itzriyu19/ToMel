var openingPage = document.querySelector('.container.opening');
var mainPage = document.querySelector('.container.main');
var nextBtn = document.querySelector('.btn-next');
var question = document.getElementById("question");
var yesBtn = document.getElementsByClassName("btn-yes")[0];
var noBtn = document.getElementsByClassName("btn-no")[0];
var gifContainer = document.getElementsByClassName("gif-container")[0];
var yesSize = 16;
var noNameIndex = 0;
var noNames = ["Ayaw mo?", "sige na ghud?", "grabi ka naman", "Pagtoo", "Oo na kay!", "sige na ba mugos nako"];
const fallingWords = [ "Yieeeeeee!", "Thankyou!", "Yay!"];

function showMainPage() {
    openingPage.style.display = 'none';
    mainPage.style.display = 'flex';
}

function increaseYesSize() {
    yesSize += 15;
    yesBtn.style.fontSize = yesSize + "px";
}

function changeNoName() {
    noBtn.innerHTML = noNames[noNameIndex];
    noNameIndex = (noNameIndex + 1) % noNames.length;
    increaseYesSize();
}

function createFallingElement() {
    // Create a new element
    const fallingElement = document.createElement("div");
    fallingElement.className = "falling-element";
    document.body.appendChild(fallingElement);

    // Set initial position and animation
    const startPosition = Math.random() * window.innerWidth;
    fallingElement.style.left = startPosition + "px";
    fallingElement.style.top = "0";
    fallingElement.textContent = fallingWords[Math.floor(Math.random() * fallingWords.length)];
    fallingElement.style.animationDuration = Math.random() * 2 + 1 + "s";

    // Remove the element after animation completes
    fallingElement.addEventListener("animationend", () => {
        fallingElement.remove();
    });
}

function showGif() {
    question.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    gifContainer.style.display = "block";
    document.querySelector('.header-image').style.display = 'none';

    // Add party effect class to the gif container
    gifContainer.classList.add("party-effect");

    // Create and append falling elements
    for (let i = 0; i < 20; i++) {
        createFallingElement();
    }
}
