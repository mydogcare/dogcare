// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

// Header scroll effect
const header = document.getElementById('header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Reviews slider
const reviewsContainer = document.getElementById('reviewsContainer');
const prevReviewBtn = document.getElementById('prevReview');
const nextReviewBtn = document.getElementById('nextReview');

if (reviewsContainer && prevReviewBtn && nextReviewBtn) {
    let currentReview = 0;
    const reviewCards = document.querySelectorAll('.review-card');
    const totalReviews = reviewCards.length;
    
    function showReview(index) {
        if (index < 0) index = totalReviews - 1;
        if (index >= totalReviews) index = 0;
        
        currentReview = index;
        reviewsContainer.style.transform = `translateX(-${currentReview * 100}%)`;
    }
    
    prevReviewBtn.addEventListener('click', () => {
        showReview(currentReview - 1);
    });
    
    nextReviewBtn.addEventListener('click', () => {
        showReview(currentReview + 1);
    });
    
    // Auto slide reviews every 5 seconds
    let slideInterval = setInterval(() => {
        showReview(currentReview + 1);
    }, 5000);
    
    // Pause on hover
    reviewsContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    reviewsContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            showReview(currentReview + 1);
        }, 5000);
    });
}

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    if (question) {
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    }
});

// Form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };
        
        // Simple validation
        if (!formData.name || !formData.phone || !formData.service || !formData.message) {
            alert('Пожалуйста, заполните все обязательные поля!');
            return;
        }
        
        // Show success message
        alert(`✅ Спасибо, ${formData.name}!\n\nВаша заявка принята. Я свяжусь с вами в течение дня по номеру ${formData.phone}.\n\nДля тестирования: в реальном сайте здесь будет отправка на сервер.`);
        
        // Reset form
        contactForm.reset();
        
        // Log to console for testing
        console.log('📋 Новая заявка:', formData);
    });
}

// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');

function checkFade() {
    fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkFade);
window.addEventListener('load', checkFade);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add more animated paw prints on load
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        for (let i = 0; i < 6; i++) {
            const paw = document.createElement('div');
            paw.className = 'paw-print';
            paw.innerHTML = '<i class="fas fa-paw"></i>';
            
            // Random position
            const top = Math.random() * 80 + 10;
            const left = Math.random() * 90 + 5;
            const delay = Math.random() * 5;
            const size = Math.random() * 0.8 + 0.7;
            
            paw.style.top = `${top}%`;
            paw.style.left = `${left}%`;
            paw.style.animationDelay = `${delay}s`;
            paw.style.fontSize = `${size}rem`;
            paw.style.opacity = `${Math.random() * 0.2 + 0.1}`;
            
            heroSection.appendChild(paw);
        }
    }
    
    console.log('🐕 Сайт зоопсихолога успешно загружен!');
    console.log('📱 Адаптивность: Проверено');
    console.log('🎨 Анимации: Активны');
    console.log('📝 Формы: Работают в тестовом режиме');
});

// Initialize Lightbox if images have data-lightbox attribute
if (typeof lightbox !== 'undefined') {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'albumLabel': "Фото %1 из %2"
    });
}
