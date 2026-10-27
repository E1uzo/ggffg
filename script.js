document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const fileInput = document.getElementById('file');

    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const fileError = document.getElementById('fileError');
    const successMessage = document.getElementById('successMessage');

    let isValid = true;

    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    fileError.style.display = 'none';
    successMessage.style.display = 'none';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.style.display = 'block';
        isValid = false;
    }

    const phoneRegex = /^\+7\d{10}$/;
    if (!phoneRegex.test(phoneInput.value.trim())) {
        phoneError.style.display = 'block';
        isValid = false;
    }

    if (fileInput.files.length === 0) {
        fileError.innerText = 'Пожалуйста, выберите файл.';
        fileError.style.display = 'block';
        isValid = false;
    } else {
        const file = fileInput.files[0];
        const fileName = file.name.toLowerCase();
        if (!fileName.endsWith('.jpeg') && !fileName.endsWith('.jpg')) {
            fileError.innerText = 'Разрешены только JPEG файлы.';
            fileError.style.display = 'block';
            isValid = false;
        }
    }

    if (isValid) {
        successMessage.style.display = 'block';
        document.getElementById('contactForm').reset();
    }
});
