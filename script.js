const themeBtn = document.getElementById('theme-btn');
const cartCount = document.getElementById('cart-count');
const buyButtons = document.querySelectorAll('.buy-btn');
const minusButtons = document.querySelectorAll('.minus-btn');
const quoteBtn = document.getElementById('quote-btn');
const quoteText = document.getElementById('quote-text');
const feedbackForm = document.getElementById('feedback-form');

let count = 0;

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (document.body.classList.contains('dark-theme')) {
    themeBtn.textContent = 'Светлая тема';
  } else {
    themeBtn.textContent = 'Темная тема';
  }
});

buyButtons.forEach((button) => {
  button.addEventListener('click', () => {
    count++;
    cartCount.textContent = count;
  });
});

minusButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (count > 0) {
      count--;
      cartCount.textContent = count;
    }
  });
});

const quotes = [
  'Иногда простой сайт - уже хорошее решение.',
  'Минимализм - это когда ничего лишнего не мешает главному.',
  'Аккуратная структура - половина хорошей верстки.',
  'Черно-белый дизайн - безопасная классика для учебного проекта.',
  'Сначала работает - потом усложняем.'
];

quoteBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Форма отправлена');
  feedbackForm.reset();
});
