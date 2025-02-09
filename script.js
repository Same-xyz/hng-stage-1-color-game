const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor = "";
let score = 0;

const colorBox = document.getElementById("colorBox");
const optionsContainer = document.getElementById("options");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const gameInstructions = document.getElementById("gameInstructions");
const newGameButton = document.getElementById("newGameButton");

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function startNewGame() {
    targetColor = getRandomColor();
    colorBox.style.backgroundColor = targetColor;
    gameStatus.textContent = "";
    gameInstructions.textContent = "Guess the correct color!";
    generateColorOptions();
}

function generateColorOptions() {
    optionsContainer.innerHTML = "";
    const shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    
    shuffledColors.forEach(color => {
        const button = document.createElement("button");
        button.textContent = color;
        button.style.backgroundColor = color;
        button.dataset.testid = "colorOption";
        button.onclick = () => checkGuess(color);
        optionsContainer.appendChild(button);
    });
}

function checkGuess(color) {
    colorBox.classList.remove("pulse", "shake");

    if (color === targetColor) {
        gameStatus.textContent = "Correct! 🎉";
        score++;
        colorBox.classList.add("pulse");
    } else {
        gameStatus.textContent = "Wrong! Try again. ❌";
        
    }
    scoreDisplay.textContent = score;
    setTimeout(startNewGame, 1000);

}

newGameButton.addEventListener("click", startNewGame);

// Initialize the game
startNewGame();
