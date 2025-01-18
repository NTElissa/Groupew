const images = document.querySelectorAll('#main img');
const playButton = document.getElementById('play-button');
const playIcon = playButton.querySelector('i');

let currentIndex = 0;
let interval;

function showImage(index) {
    // Remove the active class from all images
    images.forEach((img) => img.classList.remove('active'));
    images[index].classList.add('active');
}

function startSlideshow() {
    // Start the slideshow
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }, 5000); // Change image every 5 seconds
}

function stopSlideshow() {
    // Stop the slideshow
    clearInterval(interval);
}

let isPlaying = false;

playButton.addEventListener('click', () => {
    if (isPlaying) {
        stopSlideshow();
        playIcon.classList.replace('fa-pause', 'fa-play');
    } else {
        startSlideshow();
        playIcon.classList.replace('fa-play', 'fa-pause');
    }
    isPlaying = !isPlaying;
});

// Initialize by showing the first image
showImage(currentIndex);
