/* jshint esversion: 6 */

// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function() {
    // Add event listeners to buttons
    document.getElementById("username-form").addEventListener("submit", startGame);
    document.getElementById("rules-btn").addEventListener("click", openRules);
    document.getElementsByClassName("close-modal")[0].addEventListener("click", closeRules);
    document.getElementById("restart-btn").addEventListener("click", restartGame);
    document.getElementById("sound-btn").addEventListener("click", toggleSound);
});

/* --- Global Variables --- */
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let username = "";
let soundOn = true;
let shuffledQuestions = [];

/* --- Audio Files --- */
// Note: Ensure you have files named 'correct.mp3' and 'incorrect.mp3' in assets/audio/
const correctSound = new Audio("assets/audio/correct.mp3");
const incorrectSound = new Audio("assets/audio/incorrect.mp3");

/* --- The 20 Geography Questions --- */
const questions = [
    { question: "What is the capital of France?", answers: ["Berlin", "Madrid", "Paris", "Rome"], correct: 2 },
    { question: "Which is the largest continent?", answers: ["Africa", "Asia", "North America", "Europe"], correct: 1 },
    { question: "What is the longest river in the world?", answers: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1 },
    { question: "Which country has the most people?", answers: ["India", "USA", "China", "Russia"], correct: 0 }, // Updated data
    { question: "What is the capital of Ireland?", answers: ["Cork", "Dublin", "Galway", "Belfast"], correct: 1 },
    { question: "Which country is shaped like a boot?", answers: ["Spain", "Italy", "Greece", "Portugal"], correct: 1 },
    { question: "Which ocean is the largest?", answers: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3 },
    { question: "In which country is the Amazon Rainforest mostly located?", answers: ["Brazil", "Peru", "Colombia", "Argentina"], correct: 0 },
    { question: "What is the capital of Japan?", answers: ["Seoul", "Tokyo", "Beijing", "Bangkok"], correct: 1 },
    { question: "Mount Everest is in which mountain range?", answers: ["Andes", "Rockies", "Alps", "Himalayas"], correct: 3 },
    { question: "What is the smallest country in the world?", answers: ["Monaco", "Vatican City", "Malta", "San Marino"], correct: 1 },
    { question: "Which continent is the Sahara Desert in?", answers: ["Asia", "South America", "Africa", "Australia"], correct: 2 },
    { question: "What is the capital of the USA?", answers: ["New York", "Washington D.C.", "Los Angeles", "Chicago"], correct: 1 },
    { question: "Which country is famous for kangaroos?", answers: ["New Zealand", "South Africa", "Australia", "Austria"], correct: 2 },
    { question: "What language is spoken in Brazil?", answers: ["Spanish", "Portuguese", "French", "English"], correct: 1 },
    { question: "Identify this Flag:", answers: ["Germany", "Belgium", "France", "Italy"], correct: 0, image: "assets/images/flag-germany.png" },
    { question: "Identify this Flag:", answers: ["USA", "UK", "Australia", "Canada"], correct: 3, image: "assets/images/flag-canada.png" },
    { question: "Identify this Flag:", answers: ["Brazil", "Argentina", "Chile", "Peru"], correct: 0, image: "assets/images/flag-brazil.png" },
    { question: "Identify this Flag:", answers: ["Ireland", "Italy", "France", "Mexico"], correct: 1, image: "assets/images/flag-italy.png" },
    { question: "How many states are in the USA?", answers: ["48", "49", "50", "51"], correct: 2 }
];

/* --- Functions --- */

// 1. Start the Game
function startGame(event) {
    event.preventDefault(); // Prevents form submission
    
    // Get username
    let inputName = document.getElementById("username").value;
    if (inputName.trim() === "") {
        alert("Please enter a name!");
        return;
    }
    username = inputName;
    document.getElementById("user-display").innerText = username;

    // Switch Screens
    document.getElementById("welcome-screen").classList.add("hide");
    document.getElementById("game-screen").classList.remove("hide");

    // Reset Game State
    score = 0;
    streak = 0;
    currentQuestionIndex = 0;
    shuffledQuestions = questions.sort(() => Math.random() - 0.5); // Shuffle questions
    
    updateHUD();
    showQuestion();
}

// 2. Show Question
function showQuestion() {
    resetState(); 

    if (currentQuestionIndex >= shuffledQuestions.length) {
        endGame();
        return;
    }

    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    
    document.getElementById("question-text").innerText = currentQuestion.question;
    document.getElementById("question-number").innerText = currentQuestionIndex + 1;

    let imgContainer = document.getElementById("image-container");
    let imgElement = document.getElementById("flag-image");
    
    if (currentQuestion.image) {
        imgContainer.classList.remove("hide");
        imgElement.src = currentQuestion.image;
    } else {
        imgContainer.classList.add("hide");
    }

    // Set Buttons using forEach to avoid the JSHint loop warning
    let buttons = Array.from(document.getElementsByClassName("choice-btn"));
    buttons.forEach((btn, i) => {
        btn.innerText = currentQuestion.answers[i];
        btn.onclick = () => {
            selectAnswer(i, currentQuestion.correct, btn);
        };
    });
}

// 3. Reset Button Styles
function resetState() {
    let buttons = document.getElementsByClassName("choice-btn");
    for (let btn of buttons) {
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
    }
}

// 4. Handle Answer Selection
function selectAnswer(selectedIndex, correctIndex, btnElement) {
    // Disable all buttons
    let buttons = document.getElementsByClassName("choice-btn");
    for (let btn of buttons) {
        btn.disabled = true;
    }

    if (selectedIndex === correctIndex) {
        // Correct
        btnElement.classList.add("correct");
        score++;
        streak++;
        if (soundOn) correctSound.play();
    } else {
        // Wrong
        btnElement.classList.add("wrong");
        streak = 0;
        buttons[correctIndex].classList.add("correct"); // Show right answer
        if (soundOn) incorrectSound.play();
    }

    updateHUD();

    // Wait 1.5 seconds then next question
    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 1500);
}

function updateHUD() {
    document.getElementById("score").innerText = score;
    document.getElementById("streak-counter").innerText = streak;
}

// 5. End Game
function endGame() {
    document.getElementById("game-screen").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    document.getElementById("final-score").innerText = score + " / 20";
    
    // Custom message
    let msg = "Good try!";
    if (score > 15) msg = "You are a Geography Expert!";
    if (score < 5) msg = "Time to study the map!";
    document.getElementById("final-message").innerText = msg;
}

// 6. Restart
function restartGame() {
    document.getElementById("end-screen").classList.add("hide");
    document.getElementById("welcome-screen").classList.remove("hide");
    document.getElementById("username").value = "";
}

// 7. Modal & Sound
function openRules() {
    document.getElementById("rules-modal").classList.remove("hide");
}
function closeRules() {
    document.getElementById("rules-modal").classList.add("hide");
}
function toggleSound() {
    soundOn = !soundOn;
    document.getElementById("sound-btn").innerText = soundOn ? "Sound: ON" : "Sound: OFF";
}
