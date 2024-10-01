// Fisher-Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// How many card pairs for the game?
// This setting will be used inside the getGameCards function
// The maximum number of card pairs is 12
const NUMBER_OF_CARD_PAIRS = 6;

// These variables are used to keep track of the previously selected cards, so the clicks can be ignored
flip_previous_card = false;
uncovered_cards = [];
// The time when the last card was picked
time_of_last_card_pick = 0;

// Contains current answer of trivia question:
let correctTriviaAnswer = "";

// Function for updating score display panel
function updateScoreDisplay() {
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = `${game.score}`;
}

// Flip a card over and play the associated track
// Signal the game object that a card has been picked
// Let the game object determine if the card matches the previous card
function cardClcked(n) {
    showEmptyTriviaMessageContainer();

    // If the timee of the last pick is 0, that means it is the opening move
    if (time_of_last_card_pick == 0) {
        time_of_last_card_pick = Date.now();
    }
    // Check if a card is among the uncovered cards
    function isAmongUncoveredCards(n) {
        return uncovered_cards.includes(n);
    }
    // If the user clicked on the same card again ignore the click
    if (previous_card == n) return;
    // If the card is among the covered cards, ignore the click
    if (isAmongUncoveredCards(n)) return;
    // Flip the card over
    flipCardOver(n);
    // Pick a card and see if it matches the previous card
    // game.pickCard(n) returns true if the cards match
    if (game.pickCard(n)) {
        calculateExtraScore();

        // If the cards match, add them to the uncovered_cards array
        uncovered_cards.push(n);
        uncovered_cards.push(previous_card);

        previous_card = n;
        flip_previous_card = false;

        // Update the score display
        updateScoreDisplay();
        // Set the time of the last card pick to the current time
        time_of_last_card_pick = Date.now();
        return;
    }
    // Flip the previously selected card back over
    if (previous_card != null && flip_previous_card) flipCardOver(previous_card);
    previous_card = n;
    // Flag that if the card does not match the previous card, flip the previous card back over
    flip_previous_card = true;

    function calculateExtraScore() {
        let extra_score = 0;
        // Calculate the time difference between the last two card picks
        let time_difference = Date.now() - time_of_last_card_pick;
        // Convert the time difference to seconds
        let time_difference_seconds = time_difference / 1000;
        // Calculate the extra score based on the time difference
        extra_score = Math.floor(50 / time_difference_seconds);
        // Add the extra score to the game score
        game.addScore(extra_score);
    }
}

// Flip a card over
function flipCardOver(n) {
    const card = document.getElementById(`card-${n}`);
    card.classList.toggle("flip-card-over");
}

// Show the game over screen
function gameOver() {
    function showModal() {
        player.stop()
        stopTimer()
        // Update the final score
        document.getElementById("final-score").textContent = game.score;

        // Get the final time from the timer element
        const finalTime = document.getElementById("timer").textContent;
        document.getElementById("final-timer").textContent = finalTime;

        // Retrieve player name from localStorage, fallback to "Player" if not found
        const playerName = localStorage.getItem("playerName") || "Player";
        document.getElementById("player-name").textContent = playerName;

    // Set the game over message based on the score
    const message =
      this.score >= 10 ? "You're a music master!" : "A graceful attempt! Ready for another movement?";
    document.getElementById("game-over-message").textContent = message;

        // Show the game over popup
        document.getElementById("game-over-screen").style.display = "flex";
    }
    // Before showing the modal, hide the trivia question and trivia feedback
    hideTriviaQuestion();
    hideTriviaFeedBack();
    removeTriviaEventListeners();
    const gameOverScreen = document.getElementById("game-over-screen");
    gameOverScreen.style.display = "grid";
    const finalScore = document.getElementById("final-score");
    finalScore.textContent = `Score: ${game.score}`;
    // Get value from the DOM field named timer
    const timer = document.getElementById("timer").textContent;
    // Show the Modal Game Over screen
    showModal();
    // Add results to the scoreboard
    saveScoreBoardData({
        username: playerData.username,
        score: game.score,
        time: timer,
    });
}

function gameRestart() {
    // Show the empty trivia message container
    showEmptyTriviaMessageContainer();
    // Reset the timer back to 00:00
    resetTimer();
    player.stop()
    // Set the html content of the score display to 0
    const scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = 0;
    
    // clear the covered cards array
    uncovered_cards = [];
    previous_card = null;
    removeCardsFromDOM();
    // Reinitialize the game cards
    const newGameCards = [];
    generateGameCards(newGameCards);
    embedGameCards(cardsContainer, newGameCards);
    game = new Game(newGameCards, player, gameOver);
    // Add callbacks for trivia questions   
    game.addShowTriviaQuestionsCallback(displayTriviaQuestion);
    game.addHideTriviaQuestionsCallback(hideTriviaQuestion);
    
    
    // Hide the game over screen
    const gameOverScreen = document.getElementById("game-over-screen");
    gameOverScreen.style.display = "none";
}

// Remove all cards from the DOM
function removeCardsFromDOM() {
    var elements = document.getElementsByClassName("flip-card");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Populate the gameCards array with GameCard objects
function getGameCards(arr) {
    const path_to_composer_images = "./assets/images/composers/";
    const path_to_face_images = "./assets/images/card_faces/";
    var colors = getCardColors();
    var composerImages = getComposerImages();
    var faceImages = getCardImages();
    // Shuffle the colors array
    shuffle(colors);
    // Shuffle the face images array
    shuffle(faceImages);
    // array index track number in the playlist
    let trackIndex = 0;
    // Assign random track index between 0 and 5 to trackIndex
    trackIndex = Math.floor(Math.random() * 6);

    for (let i = 0; i < NUMBER_OF_CARD_PAIRS; i++, trackIndex++) {
        // assign filenames to the GameCard objects, based on the playlist array
        arr.push(
            new GameCard(
                i,
                trackIndex,
                playlist[trackIndex],
                colors[i],
                path_to_composer_images + composerImages[trackIndex],
                path_to_face_images + faceImages[0]
            )
        );
        arr.push(
            new GameCard(
                i,
                trackIndex,
                playlist[trackIndex],
                colors[i],
                path_to_composer_images + composerImages[trackIndex],
                path_to_face_images + faceImages[0]
            )
        );
    }
}

function getCardColors() {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "pink",
        "brown",
        "grey",
        "black",
        "cyan",
        "magenta",
        "darkblue",
    ];
    return colors;
}

function getComposerImages() {
    const images = [
        "Bach.png",
        "Beethoven.jpg",
        "Brahms.jpg",
        "chopin.jpeg",
        "Johann_Strauss.jpg",
        "mozart.jpg",
        "Rossini.jpg",
        "Satie.jpg",
        "Sibelius.jpg",
        "tchaikovsky.jpg",
        "Verdi.jpg",
        "vivaldi.jpg",
    ];
    return images;
}

// Get the names of the face up images for the game cards
function getCardImages() {
    const images = [
        "face1.webp",
        "face2.webp",
        "face3.webp",
        "face4.webp",
        "face5.webp",
    ];
    return images;
}

// Reassign the index property of each game card to match its new position in the array
function reassignGameCardIndexes(arr) {
    for (let i = 0; i < gameCards.length; i++) {
        arr[i].index = i;
    }
}

// Embed the game cards in the DOM
function embedGameCards(cardsContainer, arrGameCards) {
    arrGameCards.forEach((card) => {
        cardsContainer.innerHTML += card.render();
    });
}
// Generate the game cards
function generateGameCards(arr) {
    // Poulate the gameCards array with GameCard objects
    getGameCards(arr);
    // Shuffle the game cards
    shuffle(arr);
    // Reassign the index property of each game card to match its new position in the array
    reassignGameCardIndexes(arr);
}

// Example Function to display a trivia question that can be integrated into game logic:
function displayTriviaQuestion() {
    // Randomly select a trivia question
    const randomIndex = Math.floor(Math.random() * triviaQuestions.length);
    const selectedQuestion = triviaQuestions[randomIndex];
    let newArr = selectedQuestion.options.slice();
    shuffle(newArr);
    // Hide the feedback message
    hideTriviaFeedBack();
    // Display the question
    const triviaContainer = document.getElementById("trivia-container");
    triviaContainer.innerHTML = `
        <div class="trivia container">
            <div class="trivia-entire-line">${selectedQuestion.question}</div>
            <div class="trivia-option-line">
            ${newArr
                .map(
                    (option, index) => `
                <div class="trivia-option-item">
                    <input class="trivia-option" type="radio" id="option${index}" name="trivia-option" value="${option}" /> ${option}
                </div>
            `
                )
                .join("")} </div>
        </div>`;

    triviaContainer.style.display = "block";
    correctTriviaAnswer = selectedQuestion.answer;
    for (let i = 0; i < 4; i++) {
        const radioEl = document.getElementById(`option${i}`);
        radioEl.addEventListener("click", checkTriviaAnswer);
    }

}

// Remove trivia event listeners
function removeTriviaEventListeners() {
    for (let i = 0; i < 4; i++) {
        const radioEl = document.getElementById(`option${i}`);
        radioEl.removeEventListener("click", checkTriviaAnswer);
    }
}

function hideTriviaQuestion() {
    // Hide the modal
    const modal = document.getElementById("trivia-container");
    modal.style.display = "none";
}


function showEmptyTriviaMessageContainer() {
    const feedbackMessage = document.getElementById("trivia-message");
    feedbackMessage.className = "trivia-message-success";
    feedbackMessage.textContent = "Here you will see a BONUS question to score some EXTRA points !";
    feedbackMessage.style.display = "flex";
}

function checkTriviaAnswer() {
    const selectedOption = document.querySelector(
        'input[name="trivia-option"]:checked'
    );

    // Ensure an option is selected
    if (!selectedOption) {
        document.getElementById("feedback-message").innerText = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;
    if (userAnswer.toLowerCase() === correctTriviaAnswer.toLowerCase()) {
        showTriviaFeedBackSuccess("Correct! You earned extra points!");
        game.addScore(30);
        updateScoreDisplay();
        hideTriviaQuestion();
        
    } else {
        showTriviaFeedBackFail(`Wrong! The correct answer was: ${correctTriviaAnswer}`);
        hideTriviaQuestion();
        
    }
}

function showTriviaFeedBackSuccess(message) {
    const feedbackMessage = document.getElementById("trivia-message");
    feedbackMessage.textContent = message;
    feedbackMessage.style.display = "flex";
    feedbackMessage.className = "trivia-message-success";
}

function showTriviaFeedBackFail(message) {
    const feedbackMessage = document.getElementById("trivia-message");
    feedbackMessage.textContent = message;
    feedbackMessage.style.display = "flex";
    feedbackMessage.className = "trivia-message-fail";
}

function hideTriviaFeedBack() {
    const feedbackMessage = document.getElementById("trivia-message");
    feedbackMessage.style.display = "none";
}


// playlist for the MP3Player class. Each track in the playlist is associated with a GameCard object
// Each name in the playlist must match the name of an MP3 file in the audio folder
const playlist = [
    "Bach",
    "Beethoven",
    "Brahms",
    "Chopin",
    "Johann Strauss",
    "Mozart",
    "Rossini",
    "Satie",
    "Sibelius",
    "Tchaikovski",
    "Verdi",
    "Vivaldi",
];

// Path to the audio files
const audio_files_path = "./assets/audio/";
// Create an instance of the MP3Player class
const player = new MP3Player(audio_files_path, playlist);
// Variable to store the index of the previously selected card
var previous_card = null;
// Create an array of GameCard objects, two objects for each track in the playlist
const gameCards = [];

generateGameCards(gameCards);
// Embed the game cards in the DOM
const cardsContainer = document.getElementById("cards-container");

// Embed the game cards in the DOM
embedGameCards(cardsContainer, gameCards);
// Create a new Game object
game = new Game(gameCards, player, gameOver);

// Load the player data from local storage
const playerData = loadPlayerData();

game.addShowTriviaQuestionsCallback(displayTriviaQuestion);
game.addHideTriviaQuestionsCallback(hideTriviaQuestion);
// Hide the empty trivia container
hideTriviaQuestion();