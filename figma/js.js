document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('input[name="name"]').value;
        const telegramUsername = document.querySelector('input[name="telegram_username"]').value;
        const telegramLink = document.querySelector('input[name="telegram_link"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        const outputMessage = `Введенные данные:\nИмя: ${name}\nTelegram Username: ${telegramUsername}\nTelegram Link: ${telegramLink}\nСообщение: ${message}`;

        alert(outputMessage);
    });
});