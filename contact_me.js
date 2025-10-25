const form = document.getElementById('contact-form'); // Fixed ID
const message = document.getElementById('messageContainer'); // Added declaration

document.getElementById('fullname').addEventListener('input', function() {
    const fullName = this.value.trim();
    const nameParts = fullName.split(' ').filter(part => part !== '');
    
    if (nameParts.length >= 2) {
        this.classList.remove('invalid-input');
    } else {
        this.classList.add('invalid-input');
    }
});

document.getElementById('msg').addEventListener('input', function() { // Changed from 'textarea' to 'input'
    const messageText = this.value.trim();
    const words = messageText.split(' ').filter(part => part !== '');
    
    if (words.length >= 10) {
        this.classList.remove('invalid-input');
    } else {
        this.classList.add('invalid-input');
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    message.style.display = 'block';
    form.reset();

    
    setTimeout(() => {
        message.style.display = 'none'; // Changed to hide message
    }, 5000);
});