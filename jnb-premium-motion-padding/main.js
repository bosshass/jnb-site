// JNB LLC - Main JavaScript

function toggleMenu() {
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
}

// Close menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.hamburger').classList.remove('active');
            document.querySelector('.nav-links').classList.remove('active');
        });
    });
    
    // Scroll animations

    // Auto-tag internal page content for motion (premium feel)
    document.querySelectorAll('.content-section .content-wrapper > *, .article-content > *').forEach(el => {
        if (!el.classList.contains('animate-on-scroll')) el.classList.add('animate-on-scroll');
    });


    const animateElements = document.querySelectorAll('.animate-on-scroll, .problem-row, .service-row, .result-stat, .blog-row, .training-row');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animateElements.forEach(el => observer.observe(el));
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
