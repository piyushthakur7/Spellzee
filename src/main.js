import './style.css'

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// FAQ Accordion
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other open items
        document.querySelectorAll('.faq-item.active').forEach(activeItem => {
            if (activeItem !== item) {
                activeItem.classList.remove('active');
            }
        });
        item.classList.toggle('active');
    });
});

// Reveal on scroll animation
const revealElements = document.querySelectorAll(
    '.trust-item, .diff-card, .curriculum-card, .teaching-card, .result-card'
);

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Initial styles for reveal animation
revealElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = `all 0.5s ease-out ${i % 5 * 0.1}s`;
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger once on load

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}
