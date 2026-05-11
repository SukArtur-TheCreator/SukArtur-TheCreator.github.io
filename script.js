// Мобильное меню
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Гладкая прокрутка к контактам
function scrollToContacts() {
    document.getElementById('contacts').scrollIntoView({ behavior: 'smooth' });
}

// Обработка формы
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
        contactForm.reset();
    });
}

// Плавное закрытие мобильного меню при скролле
window.addEventListener('scroll', () => {
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
    }
});

// Анимация при появлении элементов на экране
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

// Применяем наблюдение к карточкам
document.querySelectorAll('.exercise-card, .benefit-card, .phase').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Активные ссылки навигации
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Добавляем стили для активного пункта меню
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #667eea !important;
        border-bottom: 2px solid #667eea;
        padding-bottom: 5px;
    }
`;
document.head.appendChild(style);

console.log('✓ Сайт успешно загружен');
