
// Handle all animation-related functions
function animateGiftBox() {
    return new Promise(resolve => {
        const giftBox = document.getElementById('giftBox');
        giftBox.style.animation = 'float 1s ease-in-out';
        
        setTimeout(() => {
            giftBox.style.animation = '';
            resolve();
        }, 1000);
    });
}

function animateMessage() {
    const message = document.getElementById('birthdayMessage');
    message.style.opacity = '0';
    message.style.display = 'block';
    
    setTimeout(() => {
        message.style.opacity = '1';
        message.style.transition = 'opacity 0.5s ease-in-out';
    }, 100);
}

// Initialize animation events
document.addEventListener('DOMContentLoaded', () => {
    // Add floating animation to balloons on load
    document.querySelectorAll('.balloon').forEach(balloon => {
        balloon.style.animationDelay = `${Math.random() * 2}s`;
    });
});