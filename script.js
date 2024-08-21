document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Play audio if available
    const audioFile = document.getElementById('audio-file');
    if (audioFile) {
        const audio = new Audio(audioFile.value);
        audio.play().catch(error => console.error('Error playing audio:', error));
    }
});