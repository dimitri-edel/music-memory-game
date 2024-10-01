        // Get the modal
        const modal = document.getElementById("feedbackModal");

        // Get the form
        const form = document.getElementById("feedbackForm");

        // Get the <span> element that closes the modal
        const closeModalBtn = document.querySelector(".modal-close");

        // When the user submits the form, show the modal
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Show the modal
            modal.style.display = "block";
        });

        // When the user clicks on <span> (x), close the modal
        closeModalBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    