document.addEventListener('DOMContentLoaded', function() {
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
            rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom > 0 &&
            rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
            rect.right > 0
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
    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Back-to-top button visibility
    window.addEventListener('scroll', function() {
        const backToTop = document.querySelector('.back-to-top');
        if (window.pageYOffset > 100) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Track clicks on Choose buttons using Google Analytics
    const products = [
        { id: 'digital', buttonId: 'choose-digital', label: 'Digital Delight' },
        { id: 'premium', buttonId: 'choose-premium', label: 'Premium Frame' },
        { id: 'ultimate', buttonId: 'choose-ultimate', label: 'Ultimate Love Experience' }
    ];

    products.forEach(product => {
        const button = document.querySelector(`#${product.buttonId}`);
        
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior for demonstration

            // Send event to Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'choose_button_click', {
                    'event_category': 'Product Selection',
                    'event_label': product.label,
                    'value': 1
                });
            } else {
                console.error('Google Analytics gtag not loaded');
            }
        });
    });
});
