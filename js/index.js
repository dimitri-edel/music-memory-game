document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-game");
    const playerNameInput = document.getElementById("player-name");
    const welcomeModal = document.getElementById("welcome-modal");
    const namePromptModal = document.getElementById("name-prompt-modal");
    const modalMessage = document.getElementById("modal-message");
    const closeButtons = document.querySelectorAll(".close-button");
    const modalStartButton = document.getElementById("modal-start-button");

    startButton.addEventListener("click", () => {
        const playerName = playerNameInput.value.trim();
    
        if (playerName) {
            localStorage.setItem("playerName", playerName);
            
            modalMessage.textContent = `Welcome, ${playerName}! Get ready to play Music Non Stop!`;
            welcomeModal.style.display = "block";
            createConfetti();
        } else {
            namePromptModal.style.display = "block";
        }
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            welcomeModal.style.display = "none";
            namePromptModal.style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        if (event.target === welcomeModal) {
            welcomeModal.style.display = "none";
        }
        if (event.target === namePromptModal) {
            namePromptModal.style.display = "none";
        }
    });

    modalStartButton.addEventListener("click", () => {
        welcomeModal.style.display = "none";
        window.location.href = "game.html";
    });

    function createConfetti() {
        const colors = ['#ff0', '#f0f', '#0ff', '#f00', '#00f', '#0f0'];
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.position = 'absolute';
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = `${Math.random() * 10 + 5}px`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = `${Math.random() * window.innerWidth}px`;
            confetti.style.top = '0px';
            document.body.appendChild(confetti);

            const fallDuration = Math.random() * 3 + 2;
            confetti.animate([
                { transform: 'translateY(0)', opacity: 1 },
                { transform: `translateY(${window.innerHeight}px)`, opacity: 0 }
            ], {
                duration: fallDuration * 1000,
                easing: 'ease-in',
                fill: 'forwards'
            });

            setTimeout(() => {
                confetti.remove();
            }, fallDuration * 1000);
        }
    }
});