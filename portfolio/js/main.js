// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const moonIcon = themeToggle.querySelector('.moon-icon');
const sunIcon = themeToggle.querySelector('.sun-icon');

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    moonIcon.classList.remove('hidden');
    sunIcon.classList.add('hidden');
}

themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    moonIcon.classList.toggle('hidden');
    sunIcon.classList.toggle('hidden');
    
    // Save preference
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// GSAP Animations
// Hero section animations
gsap.from('#hero h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
});

gsap.from('#hero p', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.2,
    ease: 'power3.out'
});

gsap.from('#hero .flex', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.4,
    ease: 'power3.out'
});

// Projects section animations
gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.2,
        ease: 'power3.out'
    });
});

// Skills section animations
gsap.utils.toArray('.skill-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=50',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out'
    });
});

// Contact section animations
gsap.from('#contact', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
}); 