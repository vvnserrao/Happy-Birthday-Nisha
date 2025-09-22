document.addEventListener('DOMContentLoaded', () => {
    const giftBox = document.getElementById('giftBox');
    const birthdayMessage = document.getElementById('birthdayMessage');
    const audio = document.getElementById('birthdayTune');
    
    createBalloons();
    
    giftBox.addEventListener('click', () => {
        giftBox.classList.add('open');
        setTimeout(() => {
            birthdayMessage.classList.add('show');
            createConfetti();
            playBirthdayTune();
        }, 500);
    });
});

function createBalloons() {
    const colors = ['#ff69b4', '#87ceeb', '#98fb98', '#dda0dd', '#f0e68c'];
    const balloons = document.querySelector('.balloons');
    
    for (let i = 0; i < 15; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.top = `${Math.random() * 100}vh`;
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        balloons.appendChild(balloon);
    }
}

function createConfetti() {
    const confetti = document.getElementById('confetti');
    const colors = ['#ff69b4', '#87ceeb', '#98fb98', '#dda0dd', '#f0e68c'];
    
    for (let i = 0; i < 100; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.left = `${Math.random() * 100}vw`;
        piece.style.animationDelay = `${Math.random() * 2}s`;
        piece.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.appendChild(piece);
        
        // Remove confetti pieces after animation
        setTimeout(() => piece.remove(), 4000);
    }
}

function playBirthdayTune() {
    const audio = document.getElementById('birthdayTune');
    audio.play().catch(error => console.log('Error playing audio:', error));
}