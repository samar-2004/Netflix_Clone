const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentSlide = 0;
const maxSlides = 10;
const visibleCards = 5;
const cardWidth = 20; // Each card takes up 20% of the slider width

// Add event listeners for buttons
prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSlide < maxSlides - visibleCards) {
        currentSlide++;
        updateSliderPosition();
    }
});

// Swipe functionality
let startX;
let isSwiping = false;
const swipeThreshold = 50; // Minimum distance to detect swipe

slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX; // Capture the starting point of the touch
    isSwiping = true;
});

slider.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;

    const diffX = e.touches[0].clientX - startX; // Calculate the distance moved

    if (diffX > swipeThreshold) { // Swipe right
        if (currentSlide > 0) {
            currentSlide--;
            updateSliderPosition();
        }
        isSwiping = false; // End the swipe
    } else if (diffX < -swipeThreshold) { // Swipe left
        if (currentSlide < maxSlides - visibleCards) {
            currentSlide++;
            updateSliderPosition();
        }
        isSwiping = false; // End the swipe
    }
});

slider.addEventListener('touchend', () => {
    isSwiping = false; // Reset swipe flag when touch ends
});

function updateSliderPosition() {
    slider.style.transform = `translateX(-${currentSlide * cardWidth}%)`;
}
