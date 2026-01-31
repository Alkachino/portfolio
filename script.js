// Smooth scroll for navigation links
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.add('light-mode');
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Save preference
    const theme = body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', theme);
});

// Remove loading class after page load
window.addEventListener('load', () => {
    document.body.classList.remove('loading');

    // Make first section (hero) visible immediately
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.classList.add('visible');
    }
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Add hover effect to skill categories
const skillCategories = document.querySelectorAll('.skill-category');
skillCategories.forEach(category => {
    category.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-5px)';
    });

    category.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
    });
});

// Button click feedback
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Animate certification items on scroll
const certificationItems = document.querySelectorAll('.certification-item');
const certObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
            certObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

certificationItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    certObserver.observe(item);
});

// Animate tech tags
const techTags = document.querySelectorAll('.tech-tag');
const tagObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }, index * 50);
            tagObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

techTags.forEach(tag => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';
    tag.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    tagObserver.observe(tag);
});

// Add active state to CTA buttons
const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
ctaButtons.forEach(button => {
    button.addEventListener('mousedown', function () {
        this.style.transform = 'scale(0.95)';
    });

    button.addEventListener('mouseup', function () {
        this.style.transform = 'scale(1)';
    });
});

// Console message for developers
console.log('%c¡Hola! 👋', 'font-size: 20px; font-weight: bold; color: #14b8a6;');
console.log('%cSoy Adrian Oviedo, Backend Developer', 'font-size: 14px; color: #cbd5e1;');
console.log('%cSi estás viendo esto, ¡hablemos! aoviedo.eng@proton.me', 'font-size: 12px; color: #94a3b8;');

// Image Lightbox functionality
const lightbox = document.getElementById('image-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');

// Get all project images
const projectImages = document.querySelectorAll('.project-image img');

// Add click event to each project image
projectImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function () {
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
        lightboxCaption.textContent = this.alt;
        // Prevent body scroll when lightbox is open
        document.body.style.overflow = 'hidden';
    });
});

// Close lightbox when clicking the X button
lightboxClose.addEventListener('click', closeLightbox);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target === lightboxClose) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
        closeLightbox();
    }
});

function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}
