// Main JavaScript file for the personal website
(function() {
    'use strict';

    // DOM Elements
    const elements = {
        loadingScreen: document.getElementById('loading-screen'),
        vcard: document.getElementById('vcard'),
        themeToggle: document.getElementById('theme-toggle'),
        backToTop: document.getElementById('back-to-top'),
        profilePicture: document.getElementById('profile-picture'),
        projects: document.querySelectorAll('.project'),
        socialLinks: document.querySelectorAll('.social-link')
    };

    // State
    const state = {
        isLightTheme: false,
        isLoading: true
    };

    // Initialize the application
    function init() {
        hideLoadingScreen();
        setupEventListeners();
        setupTheme();
        setupScrollEffects();
        setupIntersectionObserver();
        addClickEffects();
        console.log('Personal website initialized successfully!');
    }

    // Hide loading screen after content loads
    function hideLoadingScreen() {
        setTimeout(() => {
            if (elements.loadingScreen) {
                elements.loadingScreen.classList.add('hidden');
                setTimeout(() => {
                    elements.loadingScreen.style.display = 'none';
                    state.isLoading = false;
                }, 500);
            }
        }, 1500);
    }

    // Setup all event listeners
    function setupEventListeners() {
        // Theme toggle
        if (elements.themeToggle) {
            elements.themeToggle.addEventListener('click', toggleTheme);
        }

        // Back to top button
        if (elements.backToTop) {
            elements.backToTop.addEventListener('click', scrollToTop);
        }

        // Scroll events
        window.addEventListener('scroll', handleScroll);

        // Keyboard navigation
        document.addEventListener('keydown', handleKeydown);

        // Project hover effects no longer needed, handled by CSS only

        // Social links tracking (for analytics)
        elements.socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const platform = link.getAttribute('aria-label');
                console.log(`Social link clicked: ${platform}`);
                // Here you could add analytics tracking
            });
        });

        // Profile picture click effect
        if (elements.profilePicture) {
            elements.profilePicture.addEventListener('click', () => {
                elements.profilePicture.style.animation = 'pulse 0.6s ease-in-out';
                setTimeout(() => {
                    elements.profilePicture.style.animation = '';
                }, 600);
            });
        }
    }

    // Theme management
    function setupTheme() {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            enableLightTheme();
        } else {
            enableDarkTheme();
        }

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
        mediaQuery.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                if (e.matches) {
                    enableLightTheme();
                } else {
                    enableDarkTheme();
                }
            }
        });
    }

    function toggleTheme() {
        if (state.isLightTheme) {
            enableDarkTheme();
        } else {
            enableLightTheme();
        }
    }

    function enableLightTheme() {
        document.body.classList.add('light-theme');
        elements.themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
        state.isLightTheme = true;
    }

    function enableDarkTheme() {
        document.body.classList.remove('light-theme');
        elements.themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
        state.isLightTheme = false;
    }

    // Scroll effects
    function setupScrollEffects() {
        // Removed parallax effect - it felt weird on scroll
        // The card now stays in its natural position
    }

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Show/hide back to top button
        if (elements.backToTop) {
            if (scrollTop > 300) {
                elements.backToTop.classList.add('visible');
            } else {
                elements.backToTop.classList.remove('visible');
            }
        }

        // Add shadow to header on scroll (if we had a fixed header)
        // This could be useful for future enhancements
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // Intersection Observer for animations
    function setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animatedElements = document.querySelectorAll('.project, .expertise-item, .status');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Keyboard navigation
    function handleKeydown(e) {
        // Escape key to close any modals (future feature)
        if (e.key === 'Escape') {
            // Close modals or overlays
        }

        // Ctrl/Cmd + K for theme toggle
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleTheme();
        }

        // Space or Enter on focusable elements
        if (e.key === ' ' || e.key === 'Enter') {
            const focused = document.activeElement;
            if (focused && focused.classList.contains('project')) {
                // Future: open project details
                console.log('Project selected:', focused.dataset.project);
            }
        }
    }

    // Add click effects and interactions
    function addClickEffects() {
        // Add ripple effect to buttons
        const buttons = document.querySelectorAll('button, .social-link');
        buttons.forEach(button => {
            button.addEventListener('click', createRipple);
        });
    }

    function createRipple(e) {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        `;

        // Ensure button has relative positioning
        if (getComputedStyle(button).position === 'static') {
            button.style.position = 'relative';
        }
        button.style.overflow = 'hidden';

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    // Add CSS for ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
    `;
    document.head.appendChild(style);

    // Utility functions
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Performance optimization
    const debouncedHandleScroll = debounce(handleScroll, 10);
    window.addEventListener('scroll', debouncedHandleScroll);

    // Error handling
    window.addEventListener('error', (e) => {
        console.error('An error occurred:', e.error);
        // Here you could send error reports to a logging service
    });

    // Service Worker registration (for future PWA features)
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // navigator.serviceWorker.register('/sw.js')
            //     .then(registration => console.log('SW registered'))
            //     .catch(error => console.log('SW registration failed'));
        });
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose some functions globally for debugging
    window.PersonalWebsite = {
        toggleTheme,
        scrollToTop,
        state
    };

})();
