
/*
==============================================
TARPUY FOODS - JAVASCRIPT FUNCTIONALITY
==============================================
Lightweight JavaScript for mobile menu functionality
==============================================
*/

// Mobile Menu Toggle Function
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    // Toggle the active class on mobile nav
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        mobileNav.style.display = 'none';
        
        // Reset hamburger animation
        mobileMenuBtn.classList.remove('active');
    } else {
        mobileNav.classList.add('active');
        mobileNav.style.display = 'flex';
        
        // Animate hamburger to X
        mobileMenuBtn.classList.add('active');
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileNav = document.getElementById('mobileNav');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Close mobile menu
            mobileNav.classList.remove('active');
            mobileNav.style.display = 'none';
            mobileMenuBtn.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = document.querySelector('.nav').contains(event.target);
        const isMobileNavOpen = mobileNav.classList.contains('active');
        
        if (!isClickInsideNav && isMobileNavOpen) {
            mobileNav.classList.remove('active');
            mobileNav.style.display = 'none';
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Form submission handler (if needed for contact forms)
function handleFormSubmission(event) {
    event.preventDefault();
    
    // Basic form validation
    const form = event.target;
    const formData = new FormData(form);
    
    // Simple validation
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.classList.add('error');
        } else {
            field.classList.remove('error');
        }
    });
    
    if (isValid) {
        // Here you would typically send the form data to a server
        console.log('Form submitted successfully');
        
        // Show success message
        alert('¡Gracias! Tu mensaje ha sido enviado correctamente.');
        
        // Reset form
        form.reset();
    } else {
        alert('Por favor, completa todos los campos requeridos.');
    }
}

// Add CSS for hamburger menu animation
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu-btn.active .hamburger-line:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .mobile-menu-btn.active .hamburger-line:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active .hamburger-line:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    `;
    document.head.appendChild(style);
});

// Intersection Observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll('.feature-card, .product-card, .recipe-card, .step-item');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
});

// Performance optimization: Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
});

// Console message for developers
console.log('🌿 Tarpuy Foods - Superfoods Andinos');
console.log('💚 Sitio web desarrollado con amor y nutrición ancestral');
console.log('📱 Para consultas: https://wa.me/tu-numero');
