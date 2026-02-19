// JNB LLC - Main JavaScript

function toggleMenu() {
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    // Close menu when clicking a link (except dropdown toggles)
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (!link.classList.contains('nav-dropdown-toggle')) {
            link.addEventListener('click', () => {
                document.querySelector('.hamburger').classList.remove('active');
                document.querySelector('.nav-links').classList.remove('active');
            });
        }
    });
    
    // Mobile dropdown toggle
    document.querySelectorAll('.nav-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                this.closest('.nav-dropdown').classList.toggle('open');
            }
        });
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.nav-dropdown')) {
            document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
        }
    });
    
    // Scroll animations
    const animateElements = document.querySelectorAll('.animate-on-scroll, .problem-row, .service-row, .result-stat, .blog-row');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => { entry.target.classList.add('visible'); }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    animateElements.forEach(el => observer.observe(el));
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) { target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
});
