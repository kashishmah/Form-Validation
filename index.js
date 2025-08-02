function validate() {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const cpassword = document.getElementById('cpassword').value.trim();

    checkUsername(username);
    checkEmail(email);
    checkPassword(password);
    checkPasswordsMatch(password, cpassword);
}

function showSuccess(id) {
    const el = document.getElementById(id);
    el.classList.add('success');
    el.classList.remove('error');
    document.getElementById(id + '_error').innerText = '';
}

function showError(id, message) {
    const el = document.getElementById(id);
    el.classList.add('error');
    el.classList.remove('success');
    document.getElementById(id + '_error').innerText = message;
}

function checkUsername(username) {
    if (username.length >= 8) {
        showSuccess('username');
    } else {
        showError('username', 'Username must be at least 8 characters long.');
    }
}

function checkEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (email.length >= 8 && emailRegex.test(email)) {
        showSuccess('email');
    } else {
        showError('email', 'Enter a valid Gmail address (e.g., abc@gmail.com).');
    }
}

function checkPassword(password) {
    if (password.length >= 8 && password.includes('.')) {
        showSuccess('password');
    } else {
        showError('password', 'Password must be at least 8 characters and include a dot (.)');
    }
}

function checkPasswordsMatch(password, cpassword) {
    if (password === cpassword && password !== '') {
        showSuccess('cpassword');
    } else {
        showError('cpassword', 'Passwords do not match.');
    }
}
