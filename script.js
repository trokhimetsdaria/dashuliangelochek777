// Скрипт для переключения темы, управления корзиной и генерации случайных советов

// Переключатель темы
const themeBtn = document.getElementById('theme-btn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Управление корзиной
let cartCount = 0;
const cartCountSpan = document.getElementById('cart-count');

// Функция для обновления отображаемого количества товаров
function updateCartDisplay() {
    cartCountSpan.textContent = cartCount;
}

// Добавляем обработчики к кнопкам покупки и уменьшения
const buyButtons = document.querySelectorAll('.buy-btn');
const minusButtons = document.querySelectorAll('.minus-btn');

buyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        cartCount += 1;
        updateCartDisplay();
    });
});

minusButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (cartCount > 0) {
            cartCount -= 1;
            updateCartDisplay();
        }
    });
});

// Случайные советы
const adviceBtn = document.getElementById('advice-btn');
const adviceText = document.getElementById('advice-text');

const adviceList = [
    'Улыбайтесь! Это улучшит настроение и поможет справиться с трудностями.',
    'Не забывайте отдыхать — восстановление важно для продуктивности.',
    'Пейте достаточно воды в течение дня.',
    'Ставьте маленькие цели, чтобы постепенно двигаться к большой мечте.',
    'Окружайте себя людьми, которые вас поддерживают.',
    'Пробуйте новое — развитие начинается за пределами зоны комфорта.',
    'Будьте благодарны за маленькие радости каждый день.'
];

adviceBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    adviceText.textContent = adviceList[randomIndex];
});

// Простая валидация формы (не отправляем данные на сервер, а выводим сообщение)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Спасибо за ваш отзыв!');
    contactForm.reset();
});