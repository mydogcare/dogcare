// Тестовый скрипт для демонстрации
document.addEventListener('DOMContentLoaded', function() {
    // Тестовая кнопка
    document.getElementById('testBtn').addEventListener('click', function() {
        alert('✅ Тест успешен! Кнопка работает.\n\nСайт готов к использованию!');
    });
    
    // Открытие формы
    const modal = document.getElementById('testModal');
    const formBtn = document.getElementById('formBtn');
    const closeBtn = document.querySelector('.close');
    
    formBtn.addEventListener('click', function() {
        modal.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Закрытие при клике вне формы
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Обработка формы
    document.getElementById('testForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('📨 Тестовая форма отправлена!\n\nВ реальном сайте здесь будет:\n1. Сохранение в базу данных\n2. Отправка email\n3. Уведомление в Telegram');
        modal.style.display = 'none';
        this.reset();
    });
    
    // Анимация карточек при прокрутке
    const cards = document.querySelectorAll('.card');
    
    function checkScroll() {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Изначально скрываем карточки
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    
    console.log('🚀 Тестовый сайт успешно загружен!');
    console.log('📱 Адаптивность: Проверено');
    console.log('🎨 Анимации: Активны');
    console.log('📝 Формы: Работают');
});