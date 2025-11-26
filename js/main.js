// Main JavaScript for Comprehensive Home Care website

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // NAVBAR COLLAPSE BUTTON
    // ============================================
    const header = document.querySelector('.site-header');
    const collapseBtn = document.querySelector('.nav-collapse-btn');

    if (collapseBtn && header) {
        collapseBtn.addEventListener('click', function() {
            header.classList.toggle('hidden');
            console.log('Navbar toggled, hidden:', header.classList.contains('hidden'));
        });
    } else {
        console.error('Collapse button or header not found');
    }

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileToggle = document.querySelector('.nav__mobile-toggle');
    const navRight = document.querySelector('.nav__right');
    const body = document.body;

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    body.appendChild(overlay);

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navRight.classList.toggle('active');
            overlay.classList.toggle('active');
            body.style.overflow = navRight.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking overlay
        overlay.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navRight.classList.remove('active');
            overlay.classList.remove('active');
            body.style.overflow = '';
        });

        // Close menu when clicking a nav link
        const navLinks = document.querySelectorAll('.nav__link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navRight.classList.remove('active');
                overlay.classList.remove('active');
                body.style.overflow = '';
            });
        });
    }

    // ============================================
    // SCROLL ANIMATIONS (Intersection Observer)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                // Optionally unobserve after animation
                // animateOnScroll.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll, .stagger-children').forEach(el => {
        animateOnScroll.observe(el);
    });

    // Auto-add animation classes to common elements
    const autoAnimateSelectors = [
        '.section__header',
        '.service-card',
        '.feature',
        '.testimonial-card',
        '.stat',
        '.contact-info-card',
        '.services-overview__item',
        '.image-banner'
    ];

    autoAnimateSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            if (!el.classList.contains('animate-on-scroll')) {
                el.classList.add('animate-on-scroll');
                // Add stagger delay for grid items
                el.style.transitionDelay = `${index * 100}ms`;
            }
            animateOnScroll.observe(el);
        });
    });

    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const header = document.querySelector('.site-header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow on scroll
        if (currentScroll > 10) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // ============================================
    // SMOOTH COUNTER ANIMATION
    // ============================================
    const counters = document.querySelectorAll('.stat__number, .hero__graphic-stat-number');

    const animateCounter = (el) => {
        const target = el.innerText;
        const hasPlus = target.includes('+');
        const hasPercent = target.includes('%');
        const isSlash = target.includes('/');

        if (isSlash) return; // Skip non-numeric values like "24/7"

        const num = parseInt(target.replace(/\D/g, ''));
        if (isNaN(num)) return;

        let current = 0;
        const increment = num / 50;
        const duration = 1500;
        const stepTime = duration / 50;

        el.innerText = '0';

        const timer = setInterval(() => {
            current += increment;
            if (current >= num) {
                current = num;
                clearInterval(timer);
            }
            let display = Math.floor(current);
            if (hasPlus) display += '+';
            if (hasPercent) display += '%';
            el.innerText = display;
        }, stepTime);
    };

    // Observe counters for animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // ============================================
    // MOBILE MENU TOGGLE
    // ============================================
    const mobileToggle = document.querySelector('.nav__mobile-toggle');
    const navLinks = document.querySelector('.nav__links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav__links--open');
            mobileToggle.classList.toggle('nav__mobile-toggle--active');
        });
    }

    // ============================================
    // CONTACT FORM HANDLING
    // ============================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Add input focus effects
        const inputs = contactForm.querySelectorAll('.form-input, .form-select, .form-textarea');

        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.classList.add('form-group--focused');
            });

            input.addEventListener('blur', () => {
                input.parentElement.classList.remove('form-group--focused');
                if (input.value) {
                    input.parentElement.classList.add('form-group--filled');
                } else {
                    input.parentElement.classList.remove('form-group--filled');
                }
            });
        });

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            // Show loading state
            submitBtn.innerHTML = `
                <svg class="spinner" viewBox="0 0 24 24" style="width: 20px; height: 20px; animation: spin 1s linear infinite;">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" fill="none" stroke-dasharray="31.4 31.4" stroke-linecap="round"/>
                </svg>
                Sending...
            `;
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                // Get form values
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    service: document.getElementById('service').value,
                    message: document.getElementById('message').value
                };

                console.log('Form submitted:', formData);

                // Show success state
                submitBtn.innerHTML = `
                    <svg style="width: 20px; height: 20px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Message Sent!
                `;
                submitBtn.style.backgroundColor = '#059669';

                // Reset form after delay
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;

                    // Remove filled classes
                    inputs.forEach(input => {
                        input.parentElement.classList.remove('form-group--filled');
                    });
                }, 2000);

            }, 1500);
        });
    }

    // ============================================
    // SMOOTH SCROLLING FOR ANCHOR LINKS
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // ============================================
    // PARALLAX EFFECT FOR HERO
    // ============================================
    const heroGraphic = document.querySelector('.hero__graphic');

    if (heroGraphic) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.3;
            heroGraphic.style.transform = `translateY(${rate}px)`;
        }, { passive: true });
    }

    // ============================================
    // HOVER TILT EFFECT FOR CARDS
    // ============================================
    const tiltCards = document.querySelectorAll('.service-card, .testimonial-card');

    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ============================================
    // TYPED TEXT EFFECT (Optional - for hero)
    // ============================================
    const heroTitle = document.querySelector('.hero__title-accent');
    if (heroTitle && heroTitle.dataset.typed) {
        // Could add typing animation here if needed
    }

});

// Add spinner keyframe animation
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        to { transform: rotate(360deg); }
    }

    .nav__links--open {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 1rem;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .nav__mobile-toggle--active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .nav__mobile-toggle--active span:nth-child(2) {
        opacity: 0;
    }

    .nav__mobile-toggle--active span:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -5px);
    }

    .form-group--focused .form-label {
        color: var(--color-primary-600);
    }

    .form-group--focused .form-input,
    .form-group--focused .form-select,
    .form-group--focused .form-textarea {
        border-color: var(--color-primary-600);
        box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.1);
    }
`;
document.head.appendChild(style);
