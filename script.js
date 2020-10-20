const form = document.getElementById('form');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
function validateForm() {
  // Using Contraint API
  isValid = form.checkValidity();
  // Style main message for an error
  message.textContent = 'Please fill out all fields.';
  message.style.color = "red";
  messageContainer.style.borderColor = "red";
}

function processFormData(e) {
  e.preventDefault();
  // Validate Form
  validateForm();
}

// Event Listener
form.addEventListener('submit', processFormData);