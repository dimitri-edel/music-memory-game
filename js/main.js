const NUMBER_OF_CUBES = 12;
const NUMBER_OF_CUBE_PAIRS = NUMBER_OF_CUBES / 2;

class GameCube {
    constructor({ index, trackIndex, composer, title, composerImage, faceImage }) {
        this.index = index;
        this.trackIndex = trackIndex;
        this.composer = composer;
        this.title = title;
        this.imgComposer = composerImage;
        this.imgFace = faceImage;
    }

    // Render the 3D cube
    render = () => {
        return `
            <div id="cube-${this.index}" class="cube" onclick="gameView.cubeClicked(${this.index})">
                <<div class="cube">
                <div class="cube-front"><img src="${this.imgFace}" alt="image of composer"></div>
                <div class="cube-back">Back</div>
                <div class="cube-top"><img src="${this.imgComposer}" alt="image of composer"></div>
                <div class="cube-bottom"><img src="${this.imgComposer}"><br>
                <span>${this.composer} <p>${this.title} </p></span>  
                </div>
                <div class="cube-left">Left</div>
                <div class="cube-right">Right</div>
            </div>`;
    }
}

class GameEvent {
    constructor() {
        this.listeners = [];
        this.data = null;
    }

    addListener = (callback) => {
        this.listeners.push(callback);
    }

    notify = () => {
        this.listeners.forEach(callback => callback(this));
    }
}


class Game {
    constructor() {
        // Array of GameCube objects
        this.cubes = [];
        // First Cube selected
        this.firstCube = null;
        // Second Cube selected
        this.secondCube = null;
        this.audio_files_path = "./assets/audio/";
        this.playListDescriptions = this.getPlayListDescriptions();
        this.generateGameCubes();
        // Instance of the MP3Player class
        this.audio_player = new MP3Player(this.audio_files_path, this.playListDescriptions);
        // Score
        this.score = 0;
        // Number of cubes uncovered
        this.cubes_uncovered = 0;
        this.timer = 0;
        this.timerInterval = null;
        this.time_of_last_cube_pick = 0;
        // To keep track of which cubes have been uncovered
        this.uncoveredCubes = [];
        this.pickCount = 0;
        // TODO: Implement Event listeners for the cubes
        this.CubePickedEvent = new GameEvent();
        this.GameOverEvent = new GameEvent();
        this.HideQuizEvent = new GameEvent();
        this.ShowQuizEvent = new GameEvent();
        this.MatchFoundEvent = new GameEvent();
        this.NoMatchFoundEvent = new GameEvent();
        this.UpdateScoreEvent = new GameEvent();
        // Event for the first card of a pair being picked
        this.firstCubePicked = new GameEvent();
        // Event for the very first card picked in the game
        this.veryFirstCubePickedEvent = new GameEvent();
        // Event for showing the quiz placeholder
        this.ShowQuizPlaceholderEvent = new GameEvent();
    }

    addEventListener = (event, callback) => {
        switch (event) {
            case "cube-picked":
                this.CubePickedEvent.addListener(callback);
                break;
            case "first-cube-picked":
                this.firstCubePicked.addListener(callback);
                break;
            case "very-first-cube-picked":
                this.veryFirstCubePickedEvent.addListener(callback);
                break;
            case "match-found":
                this.MatchFoundEvent.addListener(callback);
                break;
            case "no-match-found":
                this.NoMatchFoundEvent.addListener(callback);
                break;
            case "game-over":
                this.GameOverEvent.addListener(callback);
                break;
            case "show-quiz":
                this.ShowQuizEvent.addListener(callback);
                break;
            case "hide-quiz":
                this.HideQuizEvent.addListener(callback);
                break;
            case "show-quiz-placeholder":
                this.ShowQuizPlaceholderEvent.addListener(callback);
                break;
            case "update-score":
                this.UpdateScoreEvent.addListener(callback);
                break;
        }
    }
    // Fisher Yates shuffle algorithm
    shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    generateGameCubes = () => {
        const path_to_composer_images = "./assets/images/composers/";
        const path_to_face_images = "./assets/images/card_faces/";
        var faceImages = this.getCardImages();


        // Shuffle the face images array
        this.shuffle(faceImages);
        // array index track number in the playlist
        let trackIndex = 0;
        // Assign random track index between 0 and NUMBER_OF_CUBE_PAIRS to trackIndex
        // This way it is ensured that the starting point of the playlist is different 
        // each time and the following for-loop does not exceed the length of the playlist
        trackIndex = Math.floor(Math.random() * NUMBER_OF_CUBE_PAIRS);

        for (let i = 0; i < NUMBER_OF_CUBE_PAIRS; i++, trackIndex++) {
            // assign filenames to the GameCard objects, based on the playlist array
            // index, trackIndex, composer, title, composerImage, faceImag
            this.cubes.push(
                new GameCube(
                    {
                        index: i,
                        trackIndex: trackIndex,
                        composer: this.playListDescriptions[trackIndex].composer,
                        title: this.playListDescriptions[trackIndex].title,
                        composerImage: path_to_composer_images + this.playListDescriptions[trackIndex].image_filename,
                        faceImage: path_to_face_images + faceImages[0]
                    }
                )
            );
            this.cubes.push(
                new GameCube(
                    {
                        index: i,
                        trackIndex: trackIndex,
                        composer: this.playListDescriptions[trackIndex].composer,
                        title: this.playListDescriptions[trackIndex].title,
                        composerImage: path_to_composer_images + this.playListDescriptions[trackIndex].image_filename,
                        faceImage: path_to_face_images + faceImages[0]
                    }
                )
            );
        }

        // Shuffle the cubes array
        this.shuffle(this.cubes);
        // / Reassign the index property of each game cube to match its new position in the array
        for (let i = 0; i < this.cubes.length; i++) {
            this.cubes[i].index = i;
        }
    }

    removeCubesFromDOM = () => {
        var elements = document.getElementsByClassName("cube");
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }

    getCardImages = () => {
        const images = [
            "face1.webp",
            "face2.webp",
            "face3.webp",
            "face4.webp",
            "face5.webp",
        ];
        return images;
    }



    getPlayListDescriptions = () => {
        const descriptions = [
            { filename: "Bach", composer: "Bach", title: "Tocata & Fugue", image_filename: "Bach.png" },
            { filename: "Beethoven", composer: "Beethoven", title: "Ninth Symphony", image_filename: "Beethoven.jpg" },
            { filename: "Brahms", composer: "Brahms", title: "Tragic Overture", image_filename: "Brahms.jpg" },
            { filename: "Chopin", composer: "Chopin", title: "Nocturne No.2", image_filename: "chopin.jpeg" },
            { filename: "Johann Strauss", composer: "Johann Strauss", title: "Voices of Spring", image_filename: "Johann_Strauss.jpg" },
            { filename: "Mozart", composer: "Mozart", title: "Symphony No.40", image_filename: "mozart.jpg" },
            { filename: "Rossini", composer: "Rossini", title: "The Barber of Seville", image_filename: "Rossini.jpg" },
            { filename: "Satie", composer: "Satie", title: "Gnossienne No.1", image_filename: "Satie.jpg" },
            { filename: "Sibelius", composer: "Sibelius", title: "Andante Festivo", image_filename: "Sibelius.jpg" },
            { filename: "Tchaikovski", composer: "Tchaikovski", title: "Swan Lake", image_filename: "tchaikovsky.jpg" },
            { filename: "Verdi", composer: "Verdi", title: "Aida", image_filename: "Verdi.jpg" },
            { filename: "Vivaldi", composer: "Vivaldi", title: "Winter", image_filename: "vivaldi.jpg" }
        ];
        return descriptions;
    }

    restart = () => {
        this.firstCube = null;
        this.secondCube = null;
        this.score = 0;
        this.cubes_uncovered = 0;
        this.audio_player.stop();
    }

    stopPlayback = () => {
        this.audio_player.stop();
    }

    cubePicked = (n) => {
        // If the cube has already been uncovered, do nothing
        if(this.isUncoveredCube(n)) {
            return;
        }

        console.log("Cube picked: " + n);
        if (this.isSameCube(n)) {
            return false;
        }
        // If pick count is 0, it means it is the very first card picked in the game
        if (this.pickCount === 0) {
            this.firstCube = this.cubes[n];
            this.time_of_last_cube_pick = Date.now();
            this.pickCount++;
            this.audio_player.play(this.cubes[n].trackIndex);
            this.veryFirstCubePickedEvent.data = { index: n };
            console.log("Very first cube picked: " + n);
            this.veryFirstCubePickedEvent.notify();
            return;
        }
        // Cube picked event
        this.CubePickedEvent.data = { index: n };
        this.CubePickedEvent.notify();
        // Play the song associated with the Cube    
        this.audio_player.play(this.cubes[n].trackIndex);
        // If the first Cube is null, it means that this is the first Cube to be selected
        if (this.firstCube == null && this.pickCount !== 0) {
            this.firstCube = this.cubes[n];
            this.time_of_last_cube_pick = Date.now();
            // First cube picked event
            console.log("First cube picked: " + n);
            this.firstCubePicked.data = { index: n };
            this.firstCubePicked.notify();
            // Show quiz placeholder event
            this.ShowQuizPlaceholderEvent.notify();
            // Hide quiz event
            this.HideQuizEvent.notify();
        }// If the second Cube is null, it means that this is the second Cube to be selected
        else if (this.secondCube == null) {
            this.secondCube = this.cubes[n];
        } else {
            // If both cubes have been selected, but no match has been found, the second Cube becomes the first Cube
            // and the Cube that was just selected becomes the second Cube
            this.firstCube = this.secondCube;
            this.secondCube = this.cubes[n];
            this.time_of_last_cube_pick = Date.now();
        }
        // Check if the two cubes are a match
        // If they are, the score is incremented and the cubes_uncovered counter is incremented by 2        
        // and the return value is true
        // If they are not, the return value is false
        // Also, if all the cubes have been uncovered, the game is over and the return value is true
        return this.isAMatch(n);
    }

    isAMatch = (n) => {
        if (this.firstCube == null || this.secondCube == null) {
            return false;
        }

        if (this.isMatchFound(n)) {
            this.score++;
            this.calculateExtraScore();
            this.cubes_uncovered += 2;
            
            // Update score event
            this.UpdateScoreEvent.data = { score: this.score };
            this.UpdateScoreEvent.notify();
            
            // Show quiz event
            this.ShowQuizEvent.notify();
            
            if (this.isGameOver()) {
                // Hide quiz event
                this.HideQuizEvent.notify();
                // Game over event
                this.onGameOver(this);
            }
            // Match found event    
            console.log("Match found: " + n);        
            this.MatchFoundEvent.data = { first_index: this.firstCube.index, second_index: this.secondCube.index };            
            this.uncoveredCubes.push(this.firstCube);
            this.uncoveredCubes.push(this.secondCube);
            this.MatchFoundEvent.notify();            
            // Reset the first and second cubes for the next pair
            this.firstCube = null;
            this.secondCube = null;
            // Set the time of the last card pick to the current time (for calculating the extra score)
            this.time_of_last_cube_pick = Date.now();
            return true;
        }
        // No match found event
        // Copy the data to the event object
        this.NoMatchFoundEvent.data = { first_index: this.firstCube.index, second_index: this.secondCube.index };
        console.log("No match found: " + n);
        this.NoMatchFoundEvent.notify();        
        // Reset the first and second cubes to indicate that this was the first card in a pair
        this.firstCube = this.cubes[n];
        this.secondCube = null;
        return false;
    }

    isMatchFound = (n) => {
        return (this.firstCube.trackIndex === this.secondCube.trackIndex && this.firstCube.index !== n);
    }
    // See if the same card has been picked twice
    isSameCube = (n) => {
        if (this.firstCube == null) return false;
        return this.firstCube.index === n;
    }
    // See if it's one of the cubes that have already been uncovered
    isUncoveredCube = (n) => {
        return this.uncoveredCubes.includes(this.cubes[n]);
    }


    calculateExtraScore = () => {
        /* The less time the players take to find a match, the more they score */
        let extra_score = 0;
        // Calculate the time difference between the last two card picks
        let time_difference = Date.now() - this.time_of_last_cube_pick;
        // Convert the time difference to seconds
        let time_difference_seconds = time_difference / 1000;
        // Calculate the extra score based on the time difference
        extra_score = Math.floor(50 / time_difference_seconds);
        // Add the extra score to the game score
        this.score += extra_score;
    }
    isGameOver = () => {
        return this.cubes_uncovered === this.cubes.length;
    }

    // Method for calling a function supplied for game over

    onGameOver = (instance) => {
        // Call the event listeners after a delay
        // The main.js needs to get through the last function first
        setTimeout(() => {
            instance.GameOverEvent.data = { score: instance.score };
            instance.GameOverEvent.notify();
        }, 1000);
    }

    addScore = (extraScore) => {
        this.score += extraScore;
    }

    stopPlayback = () => {
        this.audio_player.stop();
    }

    turnUpVolume = () => {
        this.audio_player.turnUpVolume();
    }

    turnDownVolume = () => {
        this.audio_player.turnDownVolume();
    }

    mute = () => {
        this.audio_player.mute();
    }
}

// View Class for the Game
class GameView {
    constructor() {
        this.game = null;        
        this.quiz = null;
    }

    // intialize the game
    initGame = () => {
        this.game = new Game();
        this.quiz = new Quiz(this.game, this);
        this.render();
        this.quiz.hideQuizContainer();
        this.hideGameOverScreen();
        this.game.addEventListener("game-over", this.showGameOverScreen);
        this.game.addEventListener("match-found", this.matchFound);
        this.game.addEventListener("no-match-found", this.noMatchFound);
        this.game.addEventListener("update-score", this.updateScoreDisplay);
        this.game.addEventListener("first-cube-picked", this.firstCubePicked);
        this.game.addEventListener("very-first-cube-picked", this.veryFirstCubePicked);
    }

    cubeClicked = (n) => {        
        // Forward the information to the game logic
        this.game.cubePicked(n);
    }
    // The very first card in the game has been picked
    veryFirstCubePicked = (e) => {
        // Flip the cube over
        this.flipCubeOver(e.data.index);
    }
    // The first card of a pair has been picked
    firstCubePicked = (e) => {
        // Flip the cube over
        this.flipCubeOver(e.data.index);        
    }

    noMatchFound = (e) => {
        this.flipCubeBack(e.data.first_index);
        this.flipCubeOver(e.data.second_index);
    }

    // If a match has been found, the game logic will call this method
    matchFound = (e) => {
        this.showCubesBottom(e.data.first_index);
        this.showCubesBottom(e.data.second_index);        
    }

    gameRestart = () => {
        // Show the empty trivia message container
        this.quiz.showQuizPlaceholder();
        // Reset the timer back to 00:00
        resetTimer();
        this.game.audio_player.stop();
        // Set the html content of the score display to 0
        const scoreDisplay = document.getElementById("score");
        scoreDisplay.textContent = 0;              
        // Remove the cubes from the DOM
        this.game.removeCubesFromDOM();

        this.game = new Game();
        this.quiz = new Quiz(this.game, this);
        this.render();
        this.quiz.hideQuizContainer();
        this.hideGameOverScreen();
        this.game.addEventListener("game-over", this.showGameOverScreen);
        this.game.addEventListener("match-found", this.matchFound);
        this.game.addEventListener("no-match-found", this.noMatchFound);
        this.game.addEventListener("update-score", this.updateScoreDisplay);
        this.game.addEventListener("first-cube-picked", this.firstCubePicked);
        this.game.addEventListener("very-first-cube-picked", this.veryFirstCubePicked);
    }

    updateScoreDisplay = () => {
        document.getElementById("score").textContent = this.game.score;
    }

    flipCubeOver = (n) => {
        let cube = document.getElementById(`cube-${n}`);
        cube.className = 'cube cube-rotate-up';
    }

    flipCubeBack = (n) => {
        let cube = document.getElementById(`cube-${n}`);
        cube.className = 'cube cube-rotate-to-front';
    }

    showCubesBottom = (n) => {
        let cube = document.getElementById(`cube-${n}`);
        cube.className = 'cube cube-rotate-down';
    }

    showGameOverScreen = () => {
        // Show the game over popup
        document.getElementById("game-over-screen").style.display = "flex";
        // Stop the playback of the audio
        this.game.audio_player.stop();
        // Stop the timer
        stopTimer()
        // Update the final score
        document.getElementById("final-score").textContent = this.game.score;

        // Get the final time from the timer element
        const finalTime = document.getElementById("timer").textContent;
        document.getElementById("final-timer").textContent = finalTime;

        // Retrieve player name from localStorage, fallback to "Player" if not found
        const playerName = localStorage.getItem("playerName") || "Player";
        document.getElementById("player-name").textContent = playerName;
        // Get value from the DOM field named timer
        const timer = document.getElementById("timer").textContent;
        // Add results to the scoreboard
        saveScoreBoardData({
            username: playerName,
            score: this.game.score,
            time: timer,
        });

        // Set the game over message based on the score
        const message =
            this.game.score >= 10 ? "You're a music master!" : "A graceful attempt! Ready for another movement?";
        document.getElementById("game-over-message").textContent = message;

    }

    hideGameOverScreen = () => {
        // Hide the game over popup
        document.getElementById("game-over-screen").style.display = "none";
    }

    // Method for rendering the game
    render = () => {
        let container = document.getElementById('cubes-container');
        // Loop through the cubes and render them
        for (let i = 0; i < this.game.cubes.length; i++) {
            container.innerHTML += this.game.cubes[i].render();
        }
    }
}


const gameView = new GameView();
var volume_slider = document.getElementById('volume-slide');
gameView.initGame();
// Event listener for the volume slider
volume_slider.oninput = function () {
    let value = (this.value != null) ? this.value : 50;
    gameView.game.audio_player.setVolume(value / 100);
};


