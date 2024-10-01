$(document).ready(function() {
    // Show the instructions popup
    $('#show-instructions').click(function() {
        $('#instructions-popup').fadeIn();
        $('#overlay').fadeIn(); // Show the dark background
        pauseTimer()
    });

    // Close the instructions popup
    $('#close-instructions').click(function() {
        $('#instructions-popup').fadeOut();
        $('#overlay').fadeOut(); // Hide the dark background
        startTimer()
    });
});