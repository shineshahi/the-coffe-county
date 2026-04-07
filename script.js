/* THE COFFEE COUNTY RESORT - WAYANAD */
/* INTERACTIVITY & ANIMATIONS */

// --- HEADER SCROLL EFFECT ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// --- HERO PARALLAX ---
window.addEventListener('scroll', () => {
    const heroContent = document.querySelector('.hero-content');
    const scrollVal = window.scrollY;
    if (scrollVal < 800) {
        heroContent.style.transform = `translateY(${scrollVal * 0.4}px)`;
        heroContent.style.opacity = 1 - (scrollVal / 600);
    }
});

// --- SCROLL REVEAL ANIMATIONS ---
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: false // Animation happens only once
});

// Reveal Header
sr.reveal('.logo', { origin: 'left', delay: 100 });
sr.reveal('.nav-links', { origin: 'top', delay: 200 });
sr.reveal('.cta-header', { origin: 'right', delay: 300 });

// Reveal Sections
sr.reveal('.section-subtitle', { delay: 300 });
sr.reveal('.section-title', { delay: 400 });

// Reveal About
sr.reveal('.about-image', { origin: 'left', delay: 300 });
sr.reveal('.about-content', { origin: 'right', delay: 500 });

// Reveal Rooms (Cascade)
sr.reveal('.room-card', { interval: 200, delay: 300 });

// Reveal Amenities (Cascade)
sr.reveal('.amenity-item', { interval: 100, delay: 300 });

// Reveal Dining
sr.reveal('.dining-content', { origin: 'left', delay: 300 });
sr.reveal('.dish-carousel', { origin: 'right', delay: 500 });

// --- SMOOTH SCROLL FOR LINKS ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// --- VIDEO INITIALIZATION ---
// Ensure video plays smoothly
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.hero-video');
    if (video) {
        video.play().catch(error => {
            console.log("Auto-play was prevented by browser. User interaction needed.");
            // Add a "Play" button or handle accordingly if needed
        });
    }
});

// --- WHATSAPP DYNAMIC MESSAGE ---
// You can customize the message based on the room clicked (Advanced)
function setupBookingLinks() {
    const bookingButtons = document.querySelectorAll('.room-card .btn');
    bookingButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // In a real app, this might redirect to a booking engine
            // For this demo, let's trigger the WhatsApp link with a specific message
            const roomName = btn.closest('.room-info').querySelector('h3').innerText;
            const waLink = `https://wa.me/91XXXXXXXXXX?text=Hi, I'm interested in booking the ${roomName} at The Coffee County Resort.`;
            window.open(waLink, '_blank');
            e.preventDefault();
        });
    });
}

document.addEventListener('DOMContentLoaded', setupBookingLinks);
