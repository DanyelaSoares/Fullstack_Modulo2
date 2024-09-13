document.getElementById('contactForm').addEventListener('input', function() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    const submitBtn = document.getElementById('submitBtn');

    // Habilita o botão se todos os campos obrigatórios estiverem preenchidos
    submitBtn.disabled = !(name && email && phone && subject && message);
});
