// TODO: mput mp3 player in a separate file

class MP3Player {
    constructor(path, playlist) {
        this.audio = null;
        this.playBtn = document.getElementById('play');
        this.stopBtn = document.getElementById('stop');
        this.prevBtn = document.getElementById('prev');
        this.nextBtn = document.getElementById('next');
        // @playlist: an array of audio file names without the extension. All files must be in mp3 format
        this.tracks = playlist;
        this.audio_files_foler_path = path;
        this.trackIndex = 0;
        this.volume = 0.5;
    }

    play = (n) => {
        // If the n parampeter has a value
        if (n !== null) {
            // If an audio file is already playing, pause it and reset the time
            if (this.audio != null) {
                this.stop();
            }
            // 
            this.audio = new Audio(this.audio_files_foler_path + this.tracks[n] + ".mp3");
            this.audio.volume = this.volume;
            this.audio.play();
        } else {
            // if the audio has been stoppped, load the audio file and play it
            if (this.audio == null) {
                this.audio = new Audio(this.audio_files_foler_path + this.tracks[this.trackIndex] + ".mp3");
                this.audio.volume = this.volume;
                this.audio.play();
            } else {
                // Otherwise the audio has been paused, resume playing                
                this.audio.play();
            }
        }
    }
    // stop the audio and reset the time
    stop = () => {
        // If the sound promise is null, then return
        if(this.audio == null) return;
        // If the sound promise is not null, then stop the audio
        this.audio.pause();
        this.audio.currentTime = 0;        
    }

    pause = () => {
        this.audio.pause();
    }

    prev = () => {
        this.trackIndex = this.trackIndex > 0 ? this.trackIndex - 1 : this.tracks.length - 1;
        this.play(null);
    }

    next = () => {
        if (this.audio != null) this.stop();
        this.trackIndex = this.trackIndex < this.tracks.length - 1 ? this.trackIndex + 1 : 0;
        this.audio = new Audio(this.audio_files_foler_path + this.tracks[this.trackIndex] + ".mp3");
        this.audio.volume = this.volume;
        this.play(null);
    }

    setVolume = (volume) => {
        this.volume = volume;
        this.audio.volume = volume;
    }

    mute = () => {
        this.audio.volume = 0.0;
    }
}