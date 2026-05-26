// кнопка смены темы
var themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark');

    if (document.body.classList.contains('dark')) {
        themeBtn.textContent = 'Светлая тема';
    } else {
        themeBtn.textContent = 'Тёмная тема';
    }
});


// корзина
var cartCount = 0;
var cartCountEl = document.getElementById('cartCount');

var buyBtns = document.querySelectorAll('.btn-buy');
var minusBtns = document.querySelectorAll('.btn-minus');

buyBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        cartCount++;
        cartCountEl.textContent = cartCount;
    });
});

minusBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (cartCount > 0) {
            cartCount--;
            cartCountEl.textContent = cartCount;
        }
    });
});


// аккордеон с вопросами
var faqBtns = document.querySelectorAll('.faq-btn');

faqBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        var answer = btn.nextElementSibling;
        var isOpen = btn.classList.contains('active');

        // закрываем все открытые
        faqBtns.forEach(function (otherBtn) {
            otherBtn.classList.remove('active');
            otherBtn.nextElementSibling.classList.remove('open');
        });

        // открываем нажатый, если он был закрыт
        if (!isOpen) {
            btn.classList.add('active');
            answer.classList.add('open');
        }
    });
});


// отправка формы
var contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
    contactForm.reset();
});
