// script.js
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
});

// Close menu when clicking a nav link on mobile
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('show');
        }
    });
});

// Scroll animations for fade-in effect
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    document.querySelectorAll('.fade-in').forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('visible');
        }
    });
}

// Ensure sections are visible on load
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach(section => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
        section.classList.add('visible');
    });
});

window.addEventListener('scroll', handleScroll);
handleScroll();

// Back-to-top button visibility
window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.pageYOffset > 100) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});