// Audio controls
function initAudio() {
    const audio = document.getElementById('birthdayTune');
    audio.volume = 0.5; // Set initial volume
    
    // Preload audio
    audio.load();
}

// Initialize audio when the page loads
document.addEventListener('DOMContentLoaded', initAudio);