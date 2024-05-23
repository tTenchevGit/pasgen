document.getElementById('generateBtn').addEventListener('click', function() {
    const passwordLength = document.getElementById('length').value;
    const password = generatePassword(passwordLength);
    document.getElementById('password').value = password;
});

document.getElementById('copyBtn').addEventListener('click', copyPasswordToClipboard);

document.getElementById('password').addEventListener('click', copyPasswordToClipboard);

document.querySelector('.copy-symbol').addEventListener('click', copyPasswordToClipboard);

function copyPasswordToClipboard() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Password copied to clipboard');
}

function generatePassword(length) {
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';
    const allCharacters = upperCaseLetters + lowerCaseLetters + numbers + symbols;

    let password = '';

    // Ensure at least one of each required character type
    password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Fill the remaining length of the password
    for (let i = password.length; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    // Shuffle the password to ensure randomness
    password = password.split('').sort(() => 0.5 - Math.random()).join('');

    return password;
}
