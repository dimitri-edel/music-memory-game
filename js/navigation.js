const currnet_root_url = window.location.origin;
var root_url = '';

if (currnet_root_url.includes('localhost') || currnet_root_url.includes('127.0.0.1')) {
    root_url = currnet_root_url;
} else {
    root_url = currnet_root_url + "/music_non_stop";
}

on_test_button_click = () => {
    // redirect to the test page
    window.location.href = root_url + '/test.html';
    
}

on_start_game_button_click = () => {
    // Put player data in local storage
    savePlayerData(document.getElementById('player-name').value, 0);
    window.location.href = root_url + '/game.html';
}

on_home_button_click = () => {
    window.location.href = root_url + '/index.html';
}

on_about_button_click = () => {
    window.location.href = root_url + '/about.html';
}

on_instructions_button_click = () => {
    window.location.href = root_url + '/instructions.html';
}

on_scoreboard_button_click = () => {
    window.location.href = root_url + '/scoreboard.html';
}