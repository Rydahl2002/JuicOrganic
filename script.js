// CAROUSEL

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

let currentIndex = 0;

function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});





// SCROLL ANIMATION
// Optimeret med hjælp fra AI til at kombinere flere scroll-baserede animationer i én samlet IntersectionObserver. Dette reducerer kodegentagelse og forbedrer performance ved at bruge én observer i stedet for flere.
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Tilføj "visible" uanset type
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

// Observer alle med fade-in eller shake-on-scroll
document.querySelectorAll('.fade-in, .shake-on-scroll').forEach(el => {
    observer.observe(el);
});
