# Music Non Stop

Music Non Stop is a classical music-themed memory card game. Designed to enhance your memory while appreciating classical music.

![The website shown on a variety of screen sizes](/documentation/doc-image/amiresponsive.webp)

Visit the deployed site: [Music Non Stop](https://music-non-stop.github.io/music_non_stop/index.html)

**Developed by:** Harmonic Hackers

# Table of Contents

- [A Classical Memory Game for the Mind](#musicnonstop-a-classical-memory-game-for-the-mind)
- [Goals](#goals)
- [User Stories](#user-stories)
- [Planning & Design](#planning--design)
- [Code Architecture and Key Components](#code-architecture-and-Key-Components)
- [Future Feature](#future-feature)
- [Test](#test)
- [Deployment & Local Development](#deployment--local-development)
- [Credits](#credits)

---

## A Classical Memory Game for the Mind

<details>
<summary>Logo</summary>
<br>

The violin is a quintessential instrument in classical music, making it an excellent choice to represent this genre. It immediately signals to users that the game is centered around classical music.
The text “MusicNonStop” suggests continuous play and engagement, which is essential for a memory game. It implies that the game will keep players mentally active and entertained.

<img src="/documentation/doc-image/logoforreadme.jpg">

</details>

<details>
<summary>Game Overview</summary>
<br>

Music Non Stop is a card game that trains your brain to improve your memory while bringing the beauty of classical music to your ears. Designed for music lovers of all ages, this game challenges players to match pairs of cards that play the same classical tune. There are 24 cards featuring 12 unique pairs.

</details>

<details>
<summary>How to play</summary>
<br>

1. The game will start the timer as soon as you begin.
2. Click on any two cards to flip them over and listen to the tunes.
3. If the cards play the same tune, you have found a match. The cards will remain face up.
4. If the cards do not match, they will flip back over after a short delay.
5. Keep selecting two cards at a time, trying to remember the tunes and their locations.
6. The game ends when all pairs have been matched.

</details>

<details>
<summary>Scoring</summary>
<br>

- The scoring system rewards players with extra points for faster card matches. The quicker you match the cards, the more points you earn. Extra points are calculated based on the time between card picks. The game also saves your score and time, which are displayed at the end and recorded on the scoreboard.
- The game involves flipping cards and matching pairs. Points are awarded based on how quickly the pairs are matched.
- The top 10 players, ranked by their scores in descending order, are displayed on the scoreboard.
- Players can earn additional bonus points by answering trivia questions.

</details>

<details>
<summary>Tips for Success</summary>
<br>

1. Pay close attention to the tunes that each card plays.
2. Try to remember the location of each tune to make matching easier.
3. Practice makes perfect! The more you play, the better you’ll get at remembering the tunes.

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Goals

<details>
<summary>List of Goals</summary>
 
- **Enhance Cognitive Skills Through Classical Music:**<br>
  The primary goal of "Music Non Stop" is to help users improve their memory and auditory recognition through the pairing of classical music tunes, combining entertainment with cognitive development.

- **Provide an Engaging and Fun Experience:**<br>
  Create an enjoyable, intuitive, and visually appealing memory game for users of all ages that encourages repeated play and continuous mental stimulation.

- **Design for Inclusivity:**<br>
  Develop a responsive, user-friendly interface that adapts to different screen sizes, ensuring the game is accessible across a variety of devices, including mobile, tablet, and desktop.

- **Create a Structured and Maintainable Codebase:**<br>
  Build the game's functionality using clean, modular, and well-documented code to ensure that future updates or maintenance can be carried out seamlessly.

- **Ensure a Cohesive Visual and Audio Identity:**<br>
  Carefully choose colors, typography, and sound to create a harmonious and immersive experience that aligns with the classical music theme, making the game both aesthetically pleasing and musically enriching.

- **Incorporate Feedback for Continuous Improvement:**<br>
  Develop a feedback mechanism to gather user insights and suggestions, allowing for continuous improvement and updates to the game based on real user experiences.

- **Launch a Fully Functional Web Application:**<br>
  Deploy the final game on a live server so that users can easily access it, ensuring it performs well under different conditions and provides a smooth user experience.

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## User Stories

<details>
<summary>List of US</summary>
<br>
  
- [**As a developer**, I want **to create a repository and invite collaborators** so that **the project can be managed collaboratively and code can be version-controlled**.](https://github.com/music-non-stop/music_non_stop/issues/5)

- [As a **Scrum Master**, I want **to create a Kanban board** so that **tasks can be tracked and organized for better project workflow management**.](https://github.com/music-non-stop/music_non_stop/issues/6)

- [As a **developer**, I want **to create audio files** so that **the game has appropriate sound effects and music to enhance the user experience**.](https://github.com/music-non-stop/music_non_stop/issues/7)

- [As a **developer**, I want **to create wireframes** so that **the layout and user flow are planned and validated before development**.](https://github.com/music-non-stop/music_non_stop/issues/8)

- [As a **developer**, I want to create a **color palette** so that the site has a **cohesive and appealing visual identity**.](https://github.com/music-non-stop/music_non_stop/issues/16)

- [As a **developer**, I want **to choose typography** so that **the site has consistent and readable fonts that enhance user experience**.](https://github.com/music-non-stop/music_non_stop/issues/17)

- [**As a developer**, I want **to create a README file** so that **others can understand the project structure and purpose easily**.](https://github.com/music-non-stop/music_non_stop/issues/18)

- [As a **developer**, I want **to create game instructions** so that **users can quickly learn how to play and enjoy the game**.](https://github.com/music-non-stop/music_non_stop/issues/19)

- [As a **developer**, I want **to code the game logic** so that **the game functions according to the specified rules and provides an engaging experience**.](https://github.com/music-non-stop/music_non_stop/issues/20)

- [As a **developer**, I want **to create an index/landing page** so that **users are greeted with a clear and engaging introduction to the site**.](https://github.com/music-non-stop/music_non_stop/issues/21)

- [As a **developer**, I want **to create an About page** so that **users can learn more about the project and its creators**.](https://github.com/music-non-stop/music_non_stop/issues/22)

- [As a **developer**, I want **to create a global CSS structure** so that **the site's styles are organized and consistent across all pages**.](https://github.com/music-non-stop/music_non_stop/issues/23)

- [As a **developer**, I want **to deploy the site** so that **users can access and interact with the project online**.](https://github.com/music-non-stop/music_non_stop/issues/24)

- [As a **developer**, I want **to create a feedback form** so that **users can provide their thoughts and suggestions, helping to improve the site**.](https://github.com/music-non-stop/music_non_stop/issues/25)

- [As a developer, I want to create or find images for the memory game cards front/face down so that the game is visually engaging and fun for players.](https://github.com/music-non-stop/music_non_stop/issues/26)

- [As a **developer**, I want **to create a 404 page** so that **users have a friendly and helpful experience when encountering a broken link**.](https://github.com/music-non-stop/music_non_stop/issues/27)

- [As a **developer**, I want **to add a favicon** so that **the site has a recognizable icon in the browser tab, enhancing brand identity**.](https://github.com/music-non-stop/music_non_stop/issues/28)

- [As a **developer**, I want to **create a game landing page** so that users **have a visually engaging and functional entry point** to the game.](https://github.com/music-non-stop/music_non_stop/issues/30)

- [As a **player**, I want **my score and username** to be **saved in local storage**, so that I can continue where I left off and track my performance over time.](https://github.com/music-non-stop/music_non_stop/issues/35)

- [As a **player**, I want to be **asked a trivia or challenge question after successfully pairing cards** so that I can **earn extra points and add an additional layer of complexity and engagement** to the game.](https://github.com/music-non-stop/music_non_stop/issues/43)

- [As **a user/developer**, I want **a responsive navbar** that transforms into a hamburger menu on smaller screens so that **I can navigate the site easily** regardless of the device I'm using.
](https://github.com/music-non-stop/music_non_stop/issues/45)

- [As a **developer**,  want to **create a timer on the game page** so that **players can track how long they take to complete the game.**](https://github.com/music-non-stop/music_non_stop/issues/56)

- [As a **developer**, I want to **create a Game class that encapsulates the core game logic, independently tracks the game's state and progress, and communicates with the presentation layer to determine when the game ends**. This will **keep the game logic separate from the UI, ensuring maintainability and reusability.**](https://github.com/music-non-stop/music_non_stop/issues/59)

- [As a **developer**, I want **to create a GameCard class that encapsulates all properties of a game card, allowing it to be easily managed, extended, and rendered within the game UI**. This will **help ensure a flexible and reusable structure for the card components**.](https://github.com/music-non-stop/music_non_stop/issues/60)

- [As a **developer**, I want **to implement an MP3Player class that can easily load and play audio files**, so **that I can create a simple and efficient way to manage and control music or sound playback within the application**.](https://github.com/music-non-stop/music_non_stop/issues/61)

- [As a user, **I want to be able to play a memory card game on any webpage**, so I **can enjoy a fun and interactive experience with feedback when the game ends, and the ability to restart the game at any time**.](https://github.com/music-non-stop/music_non_stop/issues/63)

- [As  a **developer**, I want to **implement a scoring system on the game page** so that **players can see their scores based on their performance and matches**.](https://github.com/music-non-stop/music_non_stop/issues/66)

- [As a **developer**, I want to **implement play/pause/stop functionality for audio** so that **users have a seamless listening experience and can easily manage playback**.](https://github.com/music-non-stop/music_non_stop/issues/74)

- [As a **developer**, I want to **create a matching feature for the  card game that displays additional info**  when a pair is matched so **that players can learn more about the classical music theme while playing the game**.](https://github.com/music-non-stop/music_non_stop/issues/75)

- [As a **developer**, I want to **implement a modal that displays game instructions when the button is pressed** so that **players can easily understand the rules and how to play the game**.](https://github.com/music-non-stop/music_non_stop/issues/77)

- [As a **developer**, I want to **display a message at game over that thanks the player and shows their score and time taken** so that **players can see their performance and feel acknowledged for playing the game**.
](https://github.com/music-non-stop/music_non_stop/issues/78)

- [As a developer, I want to **create or find images for the memory game cards front/face** up so that **the game is visually engaging and fun for players**.](https://github.com/music-non-stop/music_non_stop/issues/80)

- [As a **user**, I want **to see the top ten results on the scoreboard with player names, scores, and times**, so **I can track my performance and compare it with others**.](https://github.com/music-non-stop/music_non_stop/issues/108)

- [As a **developer/tester** I want to **execute tests for specific features or functions** so that I **can ensure that each functionality works as intended and meets the defined requirements**.](https://github.com/music-non-stop/music_non_stop/issues/143)


</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Planning & Design

The development process for this project followed an Agile methodology, emphasizing continuous improvement throughout the development lifecycle. We assigned tasks to each other, which helped us distribute the workload efficiently and ensured clarity on responsibilities.

<details>
<summary>Wireframes</summary>
<br>

<img src="documentation/wireframes/about_us.png">
<img src="documentation/wireframes/game.png">
<img src="documentation/wireframes/game_over.png">
<img src="documentation/wireframes/home.png">
<img src="documentation/wireframes/instructions.png">
<img src="documentation/wireframes/scoreboard.png">

</details>

<details>
<summary>Colour palettes</summary>
<br>

<img src="/documentation/doc-image/img_8611.png">

Deep Forest Green (#004D40): This color evokes a sense of depth and richness, much like the profound and intricate compositions found in classical music. It can also symbolize the natural, timeless beauty of classical pieces.

Muted Gold (#F7E7CE): Gold often represents elegance and sophistication, which are key characteristics of classical music. This color can also hint at the historical and prestigious nature of classical compositions.

Light Beige (#D0B8A8): Beige is a neutral, calming color that can provide a soothing background, allowing players to focus on the game. It also complements the other colors without overpowering them, adding to the overall harmony.

Dark Charcoal (#2E2E2E): This color adds contrast and depth, much like the dramatic moments in classical music. It can also represent the serious and intense emotions that classical music can evoke.

Soft Coral Pink (#F08080): This color introduces a touch of modernity and freshness, perhaps symbolizing new interpretations or contemporary performances of classical pieces. It adds a lively and inviting element to the palette.

</details>


## Code Architecture and Key Components

### Main Game Control

<details>
<summary>main.js</summary><br>
 
The main.js file is crucial in our project as it serves as the central hub where all the functions are defined. This file acts as the pivot point of our website, orchestrating the various functionalities and ensuring that everything runs smoothly. Without it, the site would be a static display with no interactive features. Here’s what it controls:

- Game mechanics: Card flipping, matching, and score updates.
- Event handling: Managing user actions, such as clicking cards and answering trivia.
- Shuffling: Randomizing card order to keep the game fresh.
- Display: Dynamically updating the game board, score, and game-over screens.
- Game state management: Tracking uncovered cards, timing, and player progress.

</details>

### JavaScript Audio
The MP3Player class is responsible for handling audio playback during the game. It plays classical music when cards are flipped and controls audio functions like play, pause, and stop. 
The class is defined in mp3-player.js.

<details>
<summary>MP3Player Class Documentation</summary>

#### MP3Player

##### Constructor

The MP3Player class is responsible for handling audio playback during the game. It plays classical music when cards are flipped and controls audio functions like play, pause, and stop. The class is initialized with:

The constructor accepts two parameters **path** and **playlist**.

- **path**: The path to the folder with the mp3-files. The path is relative to the HTML document in which the script is loaded.
- **playlist**: An array of audio file names without the extension. All files must be in mp3 format. Example:

  <code>
  // array with mp3 filenames  
  const playlist = ["symphony1", "symphony2", "mozart-track1", "bach-track1"];  
  // path to the folder with the files  
  const path = "./js/audio/"  
  // create an instance of the mp3-player  
  const player = new MP3Player(path, playlist);  
  // Play the first track from the list (which is symphony1.mp3)  
  player.play(1);  
  </code>

##### Properties

- **audio**
- **playBtn**
- **stopBtn**
- **prevBtn**
- **nextBtn**
- **tracks**
- **audio_files_folder_path**
- **trackIndex**

##### Methods

The class implements all the essential methods for playing mp3 files:

- `play(n)`
- `stop()`
- `pause()`
- `prev()`
- `next()`

</details>

### Game Logic

<details>
<summary>Class Games</summary><br>

The game logic is defined in a class called Game. This class encapsulates the rules and the flow of the game.
It is decoupled from the presentation layer.

#### Game class

JavaScript class for game logic

##### Constructor

```constructor(cards, mp3player, gameOverCallback)```

The constructor takes a deck of cards(cards) a reference to the instance of the MP3Player for playing music.
And lastly a callback function, which a presentation layer component can supply, to execute when the game is over.

##### Important methods

- ```addScore(number)```: is used for adding some extra score to the current game
- ```pickCard(number)```: is used by the presentation layer to let the game know which card the player has picked
- ```addShowTriviaQuestionsCallback(callback)```: Add a callback function for the event when the trivia question need to appear
- ```addHideTriviaQuestionsCallback(callback)```: Add a callback function for the event when the trivia question need to dissapear
- ```stopPlayback()```: Stop the playback of whichever track is playing

#### GameCard class

This class encapsulates all the essential properties of a card for the game. 

##### Constructor

```constructor(index, trackIndex, name, backgroundColor, composerImage, faceImage)```

- index : the index of the associated card in the array, that is used by the Game object
- trackIndex : the index of the associated track in the playlist
- name : name of the audio file
- backgroundColor : background-color of the flipside of the card in case an image fails to load
- composerImage : path to the image of the associated composer
- faceImage : path to the image that is user as the face side of all the cards in the deck

##### Methods

This class only has the render() method, which renders it as a HTML-Element.

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Technologies used

<details>
<summary>List of Technologies</summary>
<br>
  
- HTML
- CSS 
- JavaScript
- GitHub
- Git
- Photoshop
- paint.net
- am I responsive
- Bootstrap
- jQuery
- Cloudflare

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Future Feature

Due to time constraints, we couldn't fit this user story into our schedule.

- [As a **developer**, I want to **create a matching feature for the  card game that displays additional info**  when a pair is matched so **that players can learn more about the classical music theme while playing the game**.](https://github.com/music-non-stop/music_non_stop/issues/75)

## Test

<details>
<summary>Test Details</summary>

### Test environment

Manual testing was performed on the following devices. No automatic tests were executed.

- x
- y


### Responsiveness

- [Am I Responsive](https://ui.dev/amiresponsive?url=https://music-non-stop.github.io/music_non_stop/index.html)

### Validator, Accessibilty

- [W3C](https://www.w3.org/developers/tools/) was used to validate the HTML on all pages of the website. Result is **PASS**.
  - [404 page](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmusic-non-stop.github.io%2Fmusic_non_stop%2F404.html)
  - [Homepage](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmusic-non-stop.github.io%2Fmusic_non_stop%2Findex.html)
  - [About Us](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmusic-non-stop.github.io%2Fmusic_non_stop%2Fabout.html)
  - [Scoreboard](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmusic-non-stop.github.io%2Fmusic_non_stop%2Fscoreboard.html)
  - [Game](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmusic-non-stop.github.io%2Fmusic_non_stop%2Fgame.html)
  - [Feedbackform](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmusic-non-stop.github.io%2Fmusic_non_stop%2Ffeedbackform.html) 
- [W3C jigsaw](https://www.w3.org/developers/tools/) was used to validate the CSS. Result is **PASS**.
  - [404 page](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmusic-non-stop.github.io%2Fmusic_non_stop%2F404.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  - [Homepage](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmusic-non-stop.github.io%2Fmusic_non_stop%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  - [About Us](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmusic-non-stop.github.io%2Fmusic_non_stop%2Fabout.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  - [Scoreboard](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmusic-non-stop.github.io%2Fmusic_non_stop%2Fscoreboard.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  - [Game](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmusic-non-stop.github.io%2Fmusic_non_stop%2Fgame.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  - [Feedbackform](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmusic-non-stop.github.io%2Fmusic_non_stop%2Ffeedbackform.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- [Lighthouse chrome devtool](/documentation/doc-image/lighthouse.webp)
- No warning or errors present in Dev Tools.
- [JSHint](https://jshint.com/about/) was used to validate the JavaScript. We use the ES6 class property syntax for concise method declarations. Some tools may flag this as invalid, but it is fully supported in modern JavaScript environments. This project uses modern JavaScript (ES6+), including class properties and arrow functions for concise methods and proper `this` scoping. While some tools may flag this syntax, it is fully supported in modern environments. For compatibility with older browsers, consider using a transpiler like Babel. Result: **PASS**.

### Validation Notes
Regarding javascript: Vendor-specific warnings can be ignored if the code works in modern browsers. If issues arise in older environments, using Babel will help ensure compatibility.

The CSS used in this project, including the Font Awesome library, may generate some warnings when checked through the W3C CSS Validator. These warnings are related to:
1. **Vendor Prefixes**: Certain styles (e.g., `-webkit-` and `-moz-` prefixed properties) are flagged as vendor-specific extensions. These are included to ensure compatibility with older browsers and can safely be ignored.
2. **CSS Variables**: The validator may flag dynamic CSS variables (e.g., `var(--fa-animation-delay)`) because they cannot be statically analyzed. However, CSS variables are fully supported in modern browsers, and their use is intentional for flexible styling.

These warnings do not affect the functionality or appearance of the site. The styles are fully supported in all major browsers.


</details>

<details>
<summary>Test Executed</summary>
<br>

#### Landing Page

| ID  | Description                    | Expected Outcome                                                     | Result | Comment |
| --- | ------------------------------ | -------------------------------------------------------------------- | ------ | ------- |
| 01  | Page Load                      | Page loads without errors and all assets are present                 |        |         |
| 02  | Title and Favicon Verification | Title displays "Music Non Stop - Memory Game" and favicon is visible | PASS   |         |
| 03  | Accessibility of Buttons       | All buttons can be activated via keyboard                            | FAIL   |         |
| 04  | Player Name Input              | Player can enter a name and submit                                   | PASS   |         |
| 05  | Instructions Button            | Instructions popup appears when "See Instructions" is clicked        | PASS   |         |
| 06  | Game Start Button              | Game starts after entering name and clicking "Submit"                | PASS   |         |
| 07  | Responsiveness                 | Page adjusts correctly on different screen sizes                     | PASS   |         |
| 08  | Content Visibility             | All content is visible without overlapping or cut-off                | PASS   |         |
| 09  | Error Handling                 | Appropriate error messages display when needed                       |        |         |
| 10  | Button Style Consistency       | All buttons maintain consistent styles across the page               | PASS   |         |
| 11  | Overlay Functionality          | Overlay appears when modals are active and blocks interaction        | PASS   |         |
| 12  | Instruction Clarity            | Instructions are clear and easy to understand                        | PASS   |         |
| 13  | Performance Check              | Page loads within acceptable time (e.g., < 2 seconds)                | PASS   |         |

#### Game Page

| ID  | Description                     | Expected Outcome                                                 | Result | Comment |
| --- | ------------------------------- | ---------------------------------------------------------------- | ------ | ------- |
| 01  | Page Load                       | Page loads without errors and all assets are present             | PASS       |         |
| 02  | Favicon Links                   | Favicon links are valid and display correctly in the browser     | PASS   |         |
| 03  | Title Check                     | Page title is "Game Page"                                        | PASS   |         |
| 04  | Score Display                   | Initial score displays as "Score: 0"                             | PASS   |         |
| 05  | Timer Display                   | Initial timer displays as "0:00"                                 | PASS   |         |
| 06  | Card Injection                  | Cards are injected into the `#cards-container`                   | PASS       |         |
| 07  | Game Over Screen Visibility     | Game over screen is hidden initially and appears after game ends | PASS   |         |
| 08  | Player Name Visibility          | Player name displays correctly on the game over screen           | PASS       |         |
| 09  | Final Score Display             | Final score is displayed correctly on game over screen           | PASS       |         |
| 10  | Final Timer Display             | Final timer displays correctly on game over screen               | PASS       |         |
| 11  | Try Again Button Functionality  | "Try Again" button restarts the game without errors              | PASS       |         |
| 12  | Play Again Button Functionality | "Play Again" button restarts the game without errors             | PASS       |         |
| 13  | Scoreboard Button Functionality | "Scoreboard" button opens the scoreboard correctly               |       |         |
| 14  | Audio Control Buttons           | Play, pause, and stop buttons function correctly                 | PASS       |         |
| 15  | Instructions Popup Visibility   | Instructions popup appears when "Instructions" button is clicked | PASS   |         |
| 16  | Overlay Functionality           | Overlay is displayed when instructions or modals are active      | PASS   |         |
| 17  | Instructions Content Clarity    | Instructions are clear and understandable                        | PASS       |         |
| 18  | Instructions Close Button       | Close button in instructions popup functions correctly           | PASS       |         |
| 19  | Responsiveness                  | Page adjusts correctly across different screen sizes             | PASS       |         |
| 20  | Game Functionality              | Game logic runs without errors during play                       | PASS       |         |
| 21  | Error Handling                  | Appropriate error messages display when errors occur             |        |         |

#### About Page

| ID  | Description                       | Expected Outcome                                       | Result | Comment |
| --- | --------------------------------- | ------------------------------------------------------ | ------ | ------- |
| 01  | Check page title                  | Title should be "About Us"                             | PASS       |         |
| 02  | Verify team member photos         | All team member images should load correctly           |PASS        |         |
| 03  | Validate LinkedIn links           | All LinkedIn links should navigate to correct profiles | PASS       |         |
| 04  | Validate GitHub links             | All GitHub links should navigate to correct profiles   | PASS       |         |
| 05  | Check accessibility of buttons    | Buttons should be keyboard accessible                  |        |         |
| 06  | Verify alt text for images        | All images should have meaningful alt text             |        |         |
| 07  | Ensure CSS styles apply correctly | All elements should have the intended styles           | PASS       |         |

#### Scoreboard Page

| ID  | Description                              | Expected Outcome                                              | Result | Comment |
| --- | ---------------------------------------- | ------------------------------------------------------------- | ------ | ------- |
| 01  | Check page title                         | Title should be "Scoreboard"                                  | PASS       |         |
| 02  | Check presence of scoreboard table       | Table should exist with appropriate columns                   | PASS       |         |
| 03  | Validate table headers                  | Table headers should display "Rank", "Username", "Score", "Time"    | PASS       |         |
| 04  | Ensure table is empty at initial load    | Table should have no rows of data                             | PASS       |         |
| 05  | Test dynamic data loading                | Table should populate with player data from playerData.js     |  PASS      |         |
| 06  | Validate CSS styles for scoreboard       | Scoreboard should have the intended styles                    | PASS       |         |
| 07  | Ensure accessibility for table elements  | Table should be keyboard accessible                           |        |         |
| 08  | Test responsiveness of scoreboard layout | Scoreboard should display correctly on different screen sizes | PASS       |         |

#### Feedback Form/Page

| ID  | Description                                 | Expected Outcome                                                          | Result | Comment |
| --- | ------------------------------------------- | ------------------------------------------------------------------------- | ------ | ------- |
| 01  | Check page title                            | Title should be "Feedback Form"                                           | PASS       |         |
| 02  | Verify form header                          | Header should display "Music Non Stop Feedback"                           |PASS        |         |
| 03  | Check presence of feedback form             | Form should exist with all specified input fields                         |PASSS        |         |
| 04  | Validate input fields                       | All fields (name, email, composer, rating, improvement) should be present |PASS        |         |
| 05  | Test required fields                        | All required fields should trigger validation on submit                   |        |         |
| 06  | Check radio buttons                         | Yes and No radio buttons should be selectable                             | PASS       |         |
| 07  | Validate rating input                       | Rating input should accept numbers between 1 and 10                       |        |         |
| 08  | Ensure modal functionality                  | Modal should display after form submission                                |        |         |
| 09  | Test modal close functionality              | Modal should close when the close button is clicked                       |        |         |
| 10  | Check accessibility for form elements       | Form elements should be accessible via keyboard navigation                |        |         |
| 11  | Test responsiveness of feedback form layout | Form should display correctly on different screen sizes                   |        |         |
| 12  | Validate CSS styles for feedback form       | Feedback form should have the intended styles              

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Deployment & Local Development

<details>
<summary>Deployment</summary>
<br>
  
Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, [Music Non Stop](https://github.com/music-non-stop/music_non_stop/)
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

This site is deployed using GitHub Pages - [Music Non Stop](https://github.com/music-non-stop/music_non_stop/)

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

<details>
<summary>Local Deployment</summary>

#### How to Fork

To fork the Music Non Stop repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Music Non Stop](https://github.com/music-non-stop/music_non_stop/)
3. Click the Fork button in the top right corner.

#### How to Clone

To clone the Music Non Stop repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, [Music Non Stop](https://github.com/music-non-stop/music_non_stop/)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

</details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_

## Credits

<details>
<summary>Content</summary>
<br>
 
- Website content created by the developer. Images sourced from free resources unless otherwise stated.
- The images and sounds on the "Error: Page Not Found" are sourced from DaCapoAlCoda.com, [C note in treble clef](https://www.dacapoalcoda.com/c-music-note) and [F note in treble clef](https://www.dacapoalcoda.com/f-music-note)
-  Code  on the "Error: Page Not Found" was inspired by:
    * [mdn HTMLMediaElement: play() method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play)
    * [W3Schools HTML DOM Audio Object](https://www.w3schools.com/jsref/dom_obj_audio.asp)
-  Trivia questions sourced from [Trivia Nerd](https://www.trivianerd.com/topic/classical-music-trivia)

</details>
  
<details>
<summary>Acknowledgements</summary>
<br> 
 
- Thanks to Code Institute for the chance to work on this hackathon.
- Thanks to our facilitator [Vasilica Pavaloi](https://github.com/Vasi012)
- Thanks to all team members, for their work and co-operation:
  - [Alina Teodora Brinzac](https://github.com/TeodoraAlina)
  - [Anthony Radose](https://github.com/anthonyradose)
  - [Dimitri Edel](https://github.com/dimitri-edel)
  - [Jacqueline Kalmár](https://github.com/JaqiKal)
  - [Kiko Climent](https://github.com/Kiko-Climent)
  - [Monica Iancu](https://github.com/Monicaular)
  - [Julia Karpa](https://github.com/Julia-Karpa)

  </details>

_<span style="color: blue;">[Back to Content](#table-of-contents)</span>_
