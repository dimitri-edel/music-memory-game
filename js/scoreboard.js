const scoreBoardData = loadScoreBoardData();
rank = 1;

function renderScoreBoardData() {
    const scoreBoard = document.getElementById('scoreboard-table');
    

    if (scoreBoardData) {
        scoreBoardData.sort((a, b) => b.score - a.score);

        scoreBoardData.forEach(function(entry) { 
            // Only get the top 10 scores
            if (rank > 10) return;
            // Append the data to the table                               
            let tr = document.createElement('tr');
            let rank_cell = document.createElement('td');
            rank_cell.textContent = rank;            
            let name = document.createElement('td');
            name.textContent = `${entry.username}`;
            let score = document.createElement('td');
            score.textContent = `${entry.score}`;
            let time = document.createElement('td');
            time.textContent = `${entry.time}`;
            tr.appendChild(rank_cell);
            tr.appendChild(name);
            tr.appendChild(score);
            tr.appendChild(time);
            scoreBoard.appendChild(tr);
            rank++;
        });
    }
}

function appendGameToNavBar() {
    const navLinks = document.getElementById('nav-links');
    const gameLink = document.createElement('li');
    gameLink.innerHTML = '<a href="game.html">Game</a>';
    navLinks.insertBefore(gameLink, navLinks.children[2]);
}

renderScoreBoardData();
// Append a Game link to the navbar after the first two links
document.addEventListener('DOMContentLoaded', function() {
    appendGameToNavBar();    
 }, false);


