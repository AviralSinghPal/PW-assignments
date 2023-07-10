function validateForm(event) {
    event.preventDefault();

    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var passwordInput = document.getElementById('password');
    var ageInput = document.getElementById('age');
    var genderInput = document.getElementById('gender');
    var dateInput = document.getElementById('date');
    var colorInput = document.getElementById('color');

    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        nameInput.focus();
        return false;
    }

    if (emailInput.value.trim() === '') {
        alert('Please enter your email.');
        emailInput.focus();
        return false;
    }

    if (!isValidPhoneNumber(phoneInput.value.trim())) {
        alert('Please enter a valid phone number.');
        phoneInput.focus();
        return false;
    }

    if (passwordInput.value.trim() === '') {
        alert('Please enter a password.');
        passwordInput.focus();
        return false;
    }

    if (ageInput.value < 18) {
        alert('You must be at least 18 years old.');
        ageInput.focus();
        return false;
    }

    if (genderInput.value === '') {
        alert('Please select your gender.');
        genderInput.focus();
        return false;
    }

    if (dateInput.value === '') {
        alert('Please select a date.');
        dateInput.focus();
        return false;
    }

    if (colorInput.value === '') {
        alert('Please select a color.');
        colorInput.focus();
        return false;
    }

    alert('Form submitted successfully!');
    document.getElementById('myForm').reset();
}

function isValidPhoneNumber(phoneNumber) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}
