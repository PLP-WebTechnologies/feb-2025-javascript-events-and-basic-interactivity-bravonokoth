// Event Handling
const changeBtn = document.getElementById('change-btn');
const eventText = document.getElementById('event-text');
const keypressInput = document.getElementById('keypress-input');
const keypressOutput = document.getElementById('keypress-output');
const secretBtn = document.getElementById('secret-btn');

changeBtn.addEventListener('click', () => {
    eventText.textContent = 'Text and color changed!';
    eventText.style.color = 'blue';
});

eventText.addEventListener('mouseover', () => {
    eventText.style.backgroundColor = '#e0e0e0';
});

eventText.addEventListener('mouseout', () => {
    eventText.style.backgroundColor = '';
});

keypressInput.addEventListener('input', () => {
    keypressOutput.textContent = `You typed: ${keypressInput.value}`;
});

secretBtn.addEventListener('dblclick', () => {
    alert('Secret action unlocked! 🎉');
});

// Interactive Elements: Slideshow
const slideshowImg = document.getElementById('slideshow-img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const images = [
    'https://via.placeholder.com/400x200?text=Image+1',
    'https://via.placeholder.com/400x200?text=Image+2',
    'https://via.placeholder.com/400x200?text=Image+3'
];
let currentImageIndex = 0;

nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideshowImg.src = images[currentImageIndex];
    slideshowImg.style.opacity = '0';
    setTimeout(() => { slideshowImg.style.opacity = '1'; }, 100);
});

prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    slideshowImg.src = images[currentImageIndex];
    slideshowImg.style.opacity = '0';
    setTimeout(() => { slideshowImg.style.opacity = '1'; }, 100);
});

// Interactive Elements: Tabs
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// Form Validation
const form = document.getElementById('user-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Name validation
    if (!nameInput.value.trim()) {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email validation
    if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Password validation
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
});

// Real-time feedback
nameInput.addEventListener('input', () => {
    nameError.textContent = nameInput.value.trim() ? '' : 'Name is required';
});

emailInput.addEventListener('input', () => {
    emailError.textContent = validateEmail(emailInput.value) ? '' : 'Invalid email format';
});

passwordInput.addEventListener('input', () => {
    passwordError.textContent = passwordInput.value.length >= 8 ? '' : 'Password must be at least 8 characters';
});