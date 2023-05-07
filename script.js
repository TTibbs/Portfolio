const showFormButton = document.getElementById('show-form');
const contactForm = document.getElementById('contact-form');

showFormButton.addEventListener('click', function() {
  contactForm.style.display = 'block';
  showFormButton.style.display = 'none';
});

const emailInput = document.querySelector('.email');
const errorMessage = document.querySelector('.error-message');

emailInput.addEventListener('input', function() {
  if (emailInput.validity.valid) {
    errorMessage.style.display = 'none';
  } else {
    errorMessage.style.display = 'block';
  }
});
